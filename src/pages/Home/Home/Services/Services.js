import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whithening from '../../../../assets/images/whitening.png'


const Services = () => {
    const services =[
        {
            id:1,
            img: fluoride,
            name:"Fluoride Treatment",
            description: "Dental treatment is best for us and our teeth",

        },
        {
            id:2,
            img: cavity,
            name:"Cavity Filling",
            description: "Dental treatment is best for us and our teeth",

        },
        {
            id:3,
            img: whithening,
            name:"Teeth Whitening",
            description: "Dental treatment is best for us and our teeth",

        },
    ]

    return (
        <div className='mt-44'>
          <div className='my-12 text-center'>
            <h3 className='text-primary text-2xl font-semibold'>Our Services</h3>
            <h2 className='text-5xl font-semibold'>Service We Provide</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl '>
          {
                services.map(service=> <ServicesCard
                key={service.id}
                service={service}
                ></ServicesCard>)
            }
          </div>
            
        </div>
    );
};

export default Services;