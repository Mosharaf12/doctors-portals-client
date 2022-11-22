import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots,price } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-3xl font-bold text-center text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0]:'try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>${price}</small></p>
                <div className="card-actions justify-center">
                   <label onClick={()=>setTreatment(option)} for="booking-modal" className="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;