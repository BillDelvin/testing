import { useForm } from 'react-hook-form';

type Inputs = {
 title: string;
 content: string;
};

const form = () => {
 const { register, handleSubmit } = useForm<Inputs>();
 const onSubmit = (data: Inputs) => console.log(data);

 return (
  <div className="container mt-5">
   <h1>Form</h1>
   <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="title">Title</label>
    <input {...register('title')} name="title" id="title" className="form-control mb-4" />

    <label htmlFor="content">Content</label>
    <input
     {...register('content', { required: true })}
     name="content"
     id="content"
     className="form-control"
    />
    <div className="text-center mt-3">
     <button type="submit" className="btn btn-secondary">
      Submit
     </button>
    </div>
   </form>
  </div>
 );
};

export default form;
