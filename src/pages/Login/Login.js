import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const googleProvider = new GoogleAuthProvider();


const Login = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const {signIn,singInPop}=useContext(AuthContext);
    const [error,setError]=useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from,{replace: true});
    }

  
    const handleButton=data=>{
        console.log(data);
        signIn(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
          
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
    }
  const handleGoogle=()=>{
    singInPop(googleProvider)
    .then(result=>{
        const user = result.user;
        console.log(user);
    })
    .catch(error=>{
        console.log(error);
    })
  }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h3 className='text-3xl text-bold text-center'>Login</h3>

                <form onSubmit={handleSubmit(handleButton)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type='email' {...register("email" ,{required: 'Email is required'})} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error'> {errors.email?.message}</p>}
                        <input  />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type='Password' {...register("password",{
                            required: 'password is required',
                            minLength: {value:6, message: 'must be 6 character needed'}
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error'> {errors.password?.message}</p>}
                        <input  />
                        <label className="label"> <span className="label-text">Forget password</span></label>
                    </div>
                    
                    <input className='btn btn-accent w-full' type="submit" value='Login'  />
                    <p className='text-error'>{error}</p>
                </form>
                <p className='mt-3'>New to Doctors portal <Link to='/signup' className='text-primary'>Create an new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline btn-primary w-full'>Continue With Google</button>

            </div>
        </div>
    );
};

export default Login;