import express, { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';

declare module 'express' {
	interface Request {
		userId?: number;
	}
}

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true,
}));
const ACCESS_SECRET = 'access_secret_key';
const REFRESH_SECRET = 'refresh_secret_key';

interface User {
	id: number;
	username: string;
	password: string;
}

const users: User[] = [
	{ id: 1, username: 'user1', password: 'pass1' },
];

let refreshTokens: string[] = [];

function generateAccessToken(user: User) {
	return jwt.sign({ userId: user.id }, ACCESS_SECRET, { expiresIn: '15m' });
}

function generateRefreshToken(user: User) {
	return jwt.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: '7d' });
}

app.post('/auth/login', (req: Request, res: Response) => {
	const { email, password } = req.body;
	const user = users.find(u => u.username === email && u.password === password);
	if (!user) return res.status(401).json({ message: 'Invalid credentials' });
	const accessToken = generateAccessToken(user);

	const refreshToken = generateRefreshToken(user);
	refreshTokens.push(refreshToken);

	res
		.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			path: '/auth/refresh',
			sameSite: 'lax',
			secure: false,
		})
		.json({ accessToken });
});

app.post('/auth/refresh', (req: Request, res: Response) => {
	const token = req.cookies.refreshToken;
	if (!token) return res.status(401).json({ message: 'No refresh token' });
	if (!refreshTokens.includes(token)) return res.status(403).json({ message: 'Invalid refresh token' });

	jwt.verify(token, REFRESH_SECRET, (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
		if (err || typeof decoded !== 'object' || !decoded?.userId) {
			return res.status(403).json({ message: 'Invalid token' });
		}

		refreshTokens = refreshTokens.filter(t => t !== token);

		const user = users.find(u => u.id === decoded.userId);
		if (!user) return res.status(404).json({ message: 'User not found' });

		const newAccessToken = generateAccessToken(user);
		const newRefreshToken = generateRefreshToken(user);
		refreshTokens.push(newRefreshToken);

		res
			.cookie('refreshToken', newRefreshToken, {
				httpOnly: true,
				path: '/auth/refresh',
				sameSite: 'strict',
				secure: false,
			})
			.json({ accessToken: newAccessToken });
	});
});

function authenticate(req: Request, res: Response, next: NextFunction): void {
	const authHeader = req.headers.authorization;
	if (!authHeader?.startsWith('Bearer ')) {
		res.status(401).json({ message: 'No token' });
		return;
	}

	const token = authHeader.split(' ')[1];
	jwt.verify(token, ACCESS_SECRET, (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
		if (err || typeof decoded !== 'object' || !decoded?.userId) {
			res.status(403).json({ message: 'Invalid token' });
			return;
		}

		req.userId = decoded.userId;
		next();
	});
}

app.get('/protected', authenticate, (req: Request, res: Response) => {
	res.json({ message: `Hello user ${req.userId}, this is protected data.` });
});

app.listen(4000, () => {
	console.log('Auth server started on http://localhost:4000');
});
/**
 * 1. test curl post login and will get access/refresh tokens
curl -i -c cookies.txt -X POST http://localhost:4000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user1","password":"pass1"}'

 Response:
	HTTP/1.1 200 OK
X-Powered-By: Express
Set-Cookie: refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0OTEzNTgxNywiZXhwIjoxNzQ5NzQwNjE3fQ.iU6Bx7vwg0sBjh0ZvwzF3efCgYmkiel7ODNkwL6Obrw; Path=/auth/refresh; HttpOnly; SameSite=Strict
Content-Type: application/json; charset=utf-8
Content-Length: 161
ETag: W/"a1-CBpXtoNYXisd3t00P90TDP9u6dQ"
Date: Thu, 05 Jun 2025 15:03:37 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0OTEzNTgxNywiZXhwIjoxNzQ5MTM2NzE3fQ.yG19qyLSnS_Gg_qHpNvL-skIu1WQULnUeW8N5O8aonY"}

2. curl refresh token
 curl -i -b cookies.txt -X POST http://localhost:4000/auth/refresh
 Response:
	HTTP/1.1 200 OK
X-Powered-By: Express
Set-Cookie: refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0OTEzNTg4MSwiZXhwIjoxNzQ5NzQwNjgxfQ.TmlCKBcTlTR3XE3FFSQV1iCNnsQOpfbfobOXmOkdy5I; Path=/auth/refresh; HttpOnly; SameSite=Strict
Content-Type: application/json; charset=utf-8
Content-Length: 161
ETag: W/"a1-sJqtksrUch45xbKT47aJxcBcGHk"
Date: Thu, 05 Jun 2025 15:04:41 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0OTEzNTg4MSwiZXhwIjoxNzQ5MTM2NzgxfQ.ho-x5f_NKaJok8FCjC82mkFMcRZgplH7_ag8cxG6LkU"}
3. access to resources
 curl -i -X GET http://localhost:4000/protected \
  -H "Authorization: Bearer <access token>"
Response { "message": "Hello user 1, this is protected data." }

 * */