import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddDoctors = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imageHostingKey = process.env.REACT_APP_imgbb_key
    

    const {data: specialties = []}= useQuery({
        queryKey: ['specialty'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
            const data = await res.json()
            return data;
        }
    })

    const handleDoctors = data => {
     const image = data.image[0];
     const formData = new FormData()
     formData.append('image',image)
     const url =`https://api.imgbb.com/1/upload?key=${imageHostingKey}`
     fetch(url,{
        method: "POST",
        body: formData

     })
     .then(res=> res.json())
     .then(imgData=> {
        console.log(imgData);
        if(imgData.success){
            console.log(imgData.data.url);
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                image: imgData.data.url

            }
            // save doctor information to the database:
            fetch('http://localhost:5000/doctors',{
                method: "POST",
                headers: {
                    'content-type':'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=> res.json())
            .then(result=> {
                console.log(result);
                toast.success(`${data.name} is added successfully`)
                navigate('/dashboard/managedoctors')
            })
        }
     })


    }
    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl font-bold'>Add a doctors</h2>
            <form onSubmit={handleSubmit(handleDoctors)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type='text' {...register("name")} className="input input-bordered w-full max-w-xs" />


                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type='email' {...register("email", { required: 'Email is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-error'> {errors.email?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs mb-3">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    
                    <select
                    {...register('specialty')}
                    className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick a Specialty</option>
                      {
                        specialties.map(specialty=>  <option
                        key={specialty._id}
                        value={specialty.name}
                        >{specialty.name}</option>)
                      }
                      
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type='file' {...register("image")} className="input input-bordered w-full max-w-xs" />


                </div>


                <input className='btn btn-accent w-full' type="submit" value='Add Doctor' />

            </form>
        </div>
    );
};

/**
 * three places to store imges
 * file system of your server
 * mongodb(database)
*/

export default AddDoctors;