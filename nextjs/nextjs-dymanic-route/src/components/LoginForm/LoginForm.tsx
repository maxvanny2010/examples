'use client';

import React, {useState} from 'react';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            });

            if (!res.ok) {
                throw new Error('Invalid email or password');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={container}>
            <h1 style={title}>Sign in</h1>

            <form onSubmit={handleSubmit}
                  style={form}>
                <div style={field}>
                    <label style={label}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={input}
                    />
                </div>

                <div style={field}>
                    <label style={label}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={input}
                    />
                </div>

                {error && <div style={errorStyle}>{error}</div>}

                <button type="submit"
                        disabled={loading}
                        style={button}>
                    {loading ? 'Signing in…' : 'Sign in'}
                </button>
            </form>
        </div>
    );
}

/* styles */

const container: React.CSSProperties = {
    width: '100%',
};

const title: React.CSSProperties = {
    marginBottom: 24,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 600,
};

const form: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
};

const field: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
};

const label: React.CSSProperties = {
    fontSize: 13,
    opacity: 0.8,
};

const input: React.CSSProperties = {
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #ccc',
    fontSize: 14,
    outline: 'none',
};

const button: React.CSSProperties = {
    marginTop: 8,
    padding: '12px',
    borderRadius: 8,
    border: 'none',
    background: '#4f7cff',
    color: '#fff',
    fontSize: 15,
    fontWeight: 500,
    cursor: 'pointer',
};

const errorStyle: React.CSSProperties = {
    color: '#d32f2f',
    fontSize: 13,
    marginTop: -4,
};
