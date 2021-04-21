import { useForm } from 'react-hook-form';

type Inputs = {
 title: string;
 content: string;
};

const form = () => {
 const { register, handleSubmit } = useForm<Inputs>();
 const onSubmit = (data: Inputs) => console.log(data);

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <input {...register('title')} name="title" id="title" />

   <input {...register('content', { required: true })} />

   <button type="submit">Submit</button>
  </form>
 );
};

export default form;
