import React from 'react';

const ServicesCard = ({service}) => {
    const {name,description,img} =service;
    return (
         <div className="card w-96 shadow-xl">
            
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
            
             <h2 className="card-title ">
                {name}
              </h2>
              <p>{description}</p>
            </div>
          </div>
    
    );
};

export default ServicesCard;