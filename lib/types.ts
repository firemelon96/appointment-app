import { z } from 'zod';

export const appointmentSchema = z.object({
  service: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  clientName: z.string(),
  email: z.string().email(),
  address: z.string(),
  vetName: z.string(),
  petName: z.string(),
  breed: z.string(),
  age: z.string(),
  gender: z.string(),
  imageUrl: z.string(),
});

export type AppointmentSchema = z.infer<typeof appointmentSchema>;
