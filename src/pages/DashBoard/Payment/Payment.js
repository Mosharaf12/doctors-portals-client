import { Elements } from '@stripe/react-stripe-js';
import { loadStripe,  } from '@stripe/stripe-js';
import React from 'react';

import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  
    const booking = useLoaderData()
    const { treatment, price, appointmentDate, slot } = booking;

    return (
        <div>
            <h3 className='text-2xl text-primary font-bold'>Payment for <span className='text-red-500'>{treatment}</span> </h3>
            <p className='text-xl'>Please Pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                    booking= {booking}
                    />
                </Elements>

            </div>
        </div>
    );
};

export default Payment;