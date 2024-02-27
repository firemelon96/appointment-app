import { veterenary } from '@/app/data/vet';
import { Button } from '../button';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { useEvent } from '@/app/store/use-event';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppointmentSchema, appointmentSchema } from '@/lib/types';
import { useAppointment } from '@/app/store/use-appointmen';
import { v4 as uuidv4 } from 'uuid';

export const servicesENUM = {
  SERVICE_1: 'Consultation',
  SERVICE_2: 'Vaccination',
};

interface FormProps {
  appointment: AppointmentSchema;
}

export const Form = ({ appointment }: FormProps) => {
  const { addEvent, updateEvent, events } = useEvent((state) => state);
  const { onClose, isEditing } = useAppointment((state) => state);

  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
    reset,
    setValue,
  } = useForm<AppointmentSchema>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      service: appointment?.service,
      startTime: appointment?.startTime,
      endTime: appointment?.endTime,
      clientName: appointment?.clientName,
      phone: appointment?.phone,
      address: appointment?.address,
      email: appointment?.email,
      vetName: appointment?.vetName,
      petName: appointment?.petName,
      breed: appointment?.breed,
      age: appointment?.age,
      gender: appointment?.gender,
      imageUrl: appointment?.imageUrl,
      vetAddress: appointment?.vetAddress,
      building: appointment?.building,
      contact: appointment?.contact,
      bldgUrl: appointment?.bldgUrl,
      birthday: appointment?.birthday,
    },
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const selectedData = veterenary.find(
      (item) => item.veterinary_name === selectedName
    );
    setValue('vetName', selectedName);
    setValue('vetAddress', selectedData?.address || '');
    setValue('building', selectedData?.building || '');
    setValue('contact', selectedData?.contact_number || '');
    setValue('bldgUrl', selectedData?.imgUrl || '');
  };

  const initialValues = Object.values(servicesENUM);

  const onSubmit = (data: AppointmentSchema) => {
    if (isEditing) {
      updateEvent(data.id, data);
      console.log('update trigger');
    } else {
      addEvent(data);
      console.log('add trigger');
    }
    onClose();
  };

  console.log(events);

  return (
    <div className='relative w-full px-10 pb-10'>
      <h1 className='text-gray-600 text-xl text-center p-5'>New Appointment</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-full flex-col text-gray-500'
      >
        <div className='space-y-3'>
          <input type='text' hidden value={uuidv4()} {...register('id')} />
          <div className='text-lg'>
            <select
              {...register('service')}
              className='p-1 px-2 w-full rounded-xl'
            >
              {initialValues.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <span className='flex flex-col gap-2'>
            <input
              defaultValue={format(new Date(), 'yyyy-MM-dd HH:mm')}
              type='datetime-local'
              {...register('startTime')}
              className='w-full px-2 p-1 rounded-xl'
            />
            {errors.startTime && <span>{errors.startTime.message}</span>}
            <input
              defaultValue={format(new Date(), 'yyyy-MM-dd HH:mm')}
              type='datetime-local'
              {...register('endTime', {
                required: 'End is required',
              })}
              className='w-full px-2 p-1 rounded-xl'
            />
          </span>
        </div>
        <br />
        <span className='border-t-2 text-gray-600 border-t-gray-300 text-lg py-2'>
          Client Information
        </span>
        <div className='space-y-3'>
          <input
            type='text'
            {...register('clientName', {
              required: 'Client name is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Name'
          />
          <input
            type='number'
            {...register('phone', {
              required: 'Phone is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Phone'
          />
          <input
            type='email'
            {...register('email', {
              required: 'Email is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Email'
          />
          <input
            type='text'
            {...register('address', {
              required: 'Address is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Address'
          />
        </div>
        <br />
        <span className='border-t-2 text-gray-600 border-t-gray-300 text-lg py-2'>
          Clinic Details
        </span>
        <div className='space-y-3'>
          <select
            {...register('vetName')}
            className='p-1 px-2 w-full rounded-xl'
            onChange={handleSelectChange}
          >
            {veterenary.map((vet, i) => (
              <option key={i} value={vet.veterinary_name}>
                {vet.veterinary_name}
              </option>
            ))}
          </select>
          <input
            type='text'
            {...register('vetAddress')}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Address'
            disabled
          />
          <input
            type='text'
            {...register('building')}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Building'
            disabled
          />
          <input
            type='text'
            {...register('contact')}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Contact'
            disabled
          />
          <input
            type='text'
            {...register('bldgUrl')}
            className='w-full p-1 rounded-xl px-2'
            placeholder='URL'
            disabled
          />
        </div>
        <br />
        <span className='border-t-2 text-gray-600 border-t-gray-300 text-lg py-2'>
          Pet Information
        </span>
        <div className='space-y-3'>
          <input
            type='text'
            {...register('petName', {
              required: 'Pet name is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Pet Name'
          />
          <input
            type='text'
            {...register('breed', {
              required: 'Breed is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Breed'
          />
          <input
            type='number'
            {...register('age', {
              required: 'Age is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Age'
          />
          {errors.age && <span>{errors.age.message}</span>}
          <input
            type='text'
            {...register('gender', {
              required: 'Gender is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Gender'
          />
          <input
            type='date'
            {...register('birthday', {
              required: 'Birthday is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Birtday'
          />
          <input
            type='text'
            {...register('imageUrl', {
              required: 'Image url is required',
            })}
            className='w-full p-1 rounded-xl px-2'
            placeholder='Image'
          />
        </div>
        <div className='mt-10 flex cursor-pointer justify-center  '>
          <button
            className='px-4 py-2 rounded-xl w-ful bg-[#FF630B] text-white w-full'
            disabled={isLoading}
            type='submit'
          >
            {isEditing ? 'Update Appointment' : 'Add Appointment'}
          </button>
        </div>
      </form>
      <div className='flex flex-col gap-2 w-full text-white py-7'>
        <Button type='button' onClick={() => reset()}>
          Cancel Appointment
        </Button>
      </div>
    </div>
  );
};
