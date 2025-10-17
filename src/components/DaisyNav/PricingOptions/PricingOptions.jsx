import React, { use } from 'react';
import PricingCard from '../../PricingCard/PricingCard';
import img1 from '../../../assets/pexels-anush-1431282.jpg'

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);

    // console.log(pricingData);

    return (
        <div className='w-11/12 mx-auto pt-10 '

        >
            <div className='md:hidden flex justify-end h-[300px]'>
                <img  src={img1} alt="" />
            </div>
            <div className='md:mt-10 mt-2 mb-10'>
                <h2 className='text-5xl gb-base-100 p-4  border-2 border-white  font-bold text-center pb-10 pt-10'>Get Our Membership</h2>
            </div>

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