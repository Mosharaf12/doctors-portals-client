import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register,formState:{errors}, handleSubmit}=useForm()
    const {createUser,updateName}=useContext(AuthContext)
    const [error, setError] =useState();

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/')
    }

    const handleButton=data=>{
        console.log(data);
        createUser(data.email, data.password)
       .then(result=>{
        const user = result.user;
        console.log(user);
        toast('success the Sign up')
        const userInfo={
            displayName: data.name 
        }
        updateName(userInfo)
        .then(()=>{  
        saveUser(data.name, data.email)
         
        })
    
        .catch(error=> console.log(error))

       })
       .catch(error=>{
        console.error(error)
        setError(error.message)
        
       })
       
    }
    const saveUser = (name, email)=>{
        const user = {name, email};
        fetch(`http://localhost:5000/users`,{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            setCreatedUserEmail(email);
            
        })
    }
   

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div>
            <h3 className='text-3xl text-bold text-center'>Sign Up</h3>

            <form onSubmit={handleSubmit(handleButton)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type='text' {...register("name")} className="input input-bordered w-full max-w-xs" />
                    
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type='email' {...register("email" ,{required: 'Email is required'})} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-error'> {errors.email?.message}</p>}
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type='Password' {...register("password",{
                        required: 'password is required',
                        minLength: {value:6, message: 'must be 6 character needed'}
                        
                        
                        })} className="input input-bordered w-full max-w-xs mb-5" />
                    {errors.password && <p className='text-error'> {errors.password?.message}</p>}
                   
                    
                </div>
                
                <input className='btn btn-accent w-full' type="submit" value='Sign Up'  />
                {setError && <p className='text-error'>{error}</p>}
            </form>
            <p className='mt-3'>Already have an account<Link to='/login' className='text-primary'> please Login</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline btn-primary w-full'>Continue With Google</button>

        </div>
    </div>
    );
};

export default SignUp;