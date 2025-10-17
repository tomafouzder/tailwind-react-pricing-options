import React, {use} from 'react';
import PricingCard from '../../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    // console.log(pricingData);
    
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-5xl gb-base-100 p-4  border-2 border-white  font-bold text-center mt-50 mb-10'>Get Our Membership</h2>

            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard 
                    pricing={pricing}
                    key={pricing.id}
                    ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;