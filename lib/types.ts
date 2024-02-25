import { z } from 'zod';

export const appointmentSchema = z.object({
  id: z.string(),
  service: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  clientName: z.string(),
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
  vetName: z.string(),
  petName: z.string(),
  breed: z.string(),
  age: z.string(),
  gender: z.string(),
  imageUrl: z.string(),
  vetAddress: z.string(),
  building: z.string(),
  contact: z.string(),
  bldgUrl: z.string(),
  birthday: z.string(),
});

export type AppointmentSchema = z.infer<typeof appointmentSchema>;
