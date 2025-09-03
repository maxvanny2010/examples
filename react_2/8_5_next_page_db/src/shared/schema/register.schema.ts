import {ROLES} from '../types';
import z from 'zod';

export const registerSchema = z
    .object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().min(1, 'Email is required').email('Invalid email format'),
        password: z.string().min(3, 'Password must be at least 3 characters long'),
        confirmPassword: z.string().min(1, 'Please confirm your password'),
        role: z.literal(ROLES.USER),
    })
    .refine((data) => {
        console.log('Checking passwords:', data.password, data.confirmPassword);
        return data.password === data.confirmPassword;
    }, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });


export type RegisterFormData = z.infer<typeof registerSchema>;
