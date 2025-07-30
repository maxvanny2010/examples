import { z } from 'zod';

export const packageSchema = z.object({
	name: z.string(),
	version: z.string(),
	description: z.string().optional(),
	dependencies: z.record(z.string(),z.string()).optional(),
	devDependencies: z.record(z.string(),z.string()).optional(),
});

export type PackageData = z.infer<typeof packageSchema>;
