import React from 'react';
import img from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Forms = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto  rounded-lg md:px-12 lg:px-16 xl:px-32 m-28" style={{background: `url(${img})`}}>
	
	<form  className="">
			<div className='text-center'>
			<h3 className='text-3xl text-primary font-bold'>Contact Us</h3>
			<h2 className='text-white text-5xl font-semibold'>Stay connected with Us</h2>
			</div>
		<div>
			<label for="name" className="text-sm">Email</label>
			<input id="email" type="email" placeholder="Email Address" className="w-full p-3 rounded bg-gray-100" required />
		</div>
		<div>
			<label for="Subject" className="text-sm">Subject</label>
			<input id="Subject" type="Subject" placeholder='Subject' className="w-full p-3 rounded bg-gray-100" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" placeholder='Message' className="w-full p-3 rounded bg-gray-100"></textarea>
		</div>
		<div className='text-center'>
		<PrimaryButton>Submit</PrimaryButton>
		</div>
	</form>
</div>
    );
};

export default Forms;