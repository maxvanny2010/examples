import bcrypt from 'bcryptjs';
import {userRepository} from './user.repository';
import {ROLES} from '@/shared/types';
import {CreateUserInput, EditUserInput} from '@/shared/schema';

export const userService = {
    getAll: () => userRepository.findAll(),

    getById: (id: number) => userRepository.findById(id),

    create: async (input: CreateUserInput) => {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        return userRepository.createUser({
            ...input,
            password: hashedPassword,
            role: input.role ?? ROLES.USER, // по умолчанию USER
        });
    },

    update: async (input: EditUserInput) => {
        const data: Partial<CreateUserInput & { role: string }> = {
            name: input.name,
            email: input.email,
            role: input.role,
        };
        if (input.password) data.password = await bcrypt.hash(input.password, 10);
        return userRepository.updateUser(input.id, data);
    },

    delete: (id: number) => userRepository.softDelete(id),
};
