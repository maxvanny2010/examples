import { User } from '@/server/core/db';

export type SafeUser = Pick<User, 'id' | 'name' | 'email'>;