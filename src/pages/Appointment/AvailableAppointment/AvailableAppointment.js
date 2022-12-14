import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';



const AvailableAppointment = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions]= useState([])
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data:appointmentOptions =[], refetch, isLoading }=useQuery({
        queryKey: ['appointmentOptions',date],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data; 
        }
    });
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/appointmentOptions`)
    //     .then(res=> res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[])
    return (
        <section>
            <p className='text-center text-2xl text-secondary font-bold'>Available Appointments on {format(selectedDate,'PP')} </p>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map(option=> <AppointmentOption
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}

                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;