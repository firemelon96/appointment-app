import { veterenary } from '@/app/data/vet';
import { useState } from 'react';

const servicesENUM = {
  SERVICE_1: 'Consultation',
  SERVICE_2: 'Vaccination',
};

export const Form = () => {
  const [services, setServices] = useState(Object.values(servicesENUM));

  return (
    <div className='relative w-full p-5'>
      <h1>Create Appointment</h1>
      <form className='flex w-full flex-col'>
        <div className='text-xl'>
          <select name='' id='' className='p-2 w-full rounded-xl'>
            {services.map((service) => (
              <option value={service}>{service}</option>
            ))}
          </select>
        </div>
        <label htmlFor='from'>Time</label>
        <span className='flex gap-2 '>
          <input type='number' className='w-12' />
          <input type='number' className='w-12' />
        </span>
        <br />
        <span className='border-t-2 border-t-gray-300'>Client details</span>
        <label htmlFor='client'>Client Name</label>
        <input type='text' />
        <label htmlFor='client'>Email</label>
        <input type='email' />
        <label htmlFor='client'>Address</label>
        <input type='text' />
        <label htmlFor='vet'>Veterenary name</label>
        <select name='clinic' id=''>
          {veterenary.map((vet) => (
            <option value={vet.building}>{vet.veterinary_name}</option>
          ))}
        </select>
        <label htmlFor='pet'>Pet name</label>
        <input type='name' />
        <label htmlFor='breed'>Breed</label>
        <input type='breed' />
        <label htmlFor='age'>Age</label>
        <input type='age' />
        <label htmlFor='gender'>Gender</label>
        <input type='gender' />
        <label htmlFor='img'>Image</label>
        <input type='img' />
      </form>
    </div>
  );
};
