import React from 'react';
import doctors from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='' 
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className="hero mt-36 ">
                <div className="hero-content flex-col lg:flex-row text-white">
                    <img src={doctors}className="-mt-36 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <p className='text-primary font-semibold'>Appointment</p>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;