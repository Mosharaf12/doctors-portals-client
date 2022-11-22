
import { format } from 'date-fns';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';


const BookingModal = ({ treatment, selectedDate, setTreatment ,refetch }) => {

    const { name: treatmentName, slots,price } = treatment
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(slot,name,email,phone);

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            price,
            phone,
        }
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('booking confirm')
                    setTreatment(null)
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='my-3 grid grid-cols-1'>
                        <input type="text" disabled value={date} className="input input-bordered w-full my-2" />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full my-2" />
                        <input name='email' defaultValue={user?.email} type="email" disabled placeholder="Email Address" className="input input-bordered w-full my-2" />
                        <input name='phone' type="text" placeholder="phone Number" className="input input-bordered w-full my-2" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="submit" />
                    </form>
                </div>

            </div>

        </>
    );
};

export default BookingModal;