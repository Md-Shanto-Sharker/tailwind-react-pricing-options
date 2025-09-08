import React, { use } from 'react';
import PricingCart from '../PricingCart/PricingCart';

const PricingOptions = ({pricingPromise}) => {
    const price = use(pricingPromise)
    console.log(price);
    return (
        <div>
            <h2 className='text-5xl'>Get Our MemberShip</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    price.map(pricing=><PricingCart pricing={pricing}></PricingCart>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;