import { User } from '@/server/db';

export type SafeUser = Pick<User, 'id' | 'name' | 'email'>;