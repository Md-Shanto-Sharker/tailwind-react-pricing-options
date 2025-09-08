import React from 'react';

const PricingCart = ({pricing}) => {
    return (
        <div className='border bg-amber-600 p-4 rounded-2xl'>
            <div >
                <h1 className='text-7xl'>{pricing.name}</h1>
                <h4 className='text-3xl'>{pricing.price}</h4>
            </div>
            <div className='bg-amber-400 p-4 rounded-2xl'>
           <p>{pricing.description}</p>

            </div>
        </div>
    );
};

export default PricingCart;