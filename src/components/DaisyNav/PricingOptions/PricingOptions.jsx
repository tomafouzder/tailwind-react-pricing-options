import React, { use } from 'react';
import PricingCard from '../../PricingCard/PricingCard';
import img1 from '../../../assets/pexels-anush-1431282.jpg'

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);

    // console.log(pricingData);

    return (
        <div className='w-11/12 mx-auto pt-10 '

        >
            <div>
                <img className='lg:relative' src={img1} alt="" />
            </div>
            <div className='md:mt-10 lg:absolute lg:top-10 lg:w-11/12 mt-2 mb-10 lg:bg-gradient-to-r  '>
                <h2 className=' gb-base-100 p-4  border-2 border-white lg:border-none py-10  lg:py-25'><span className='text-7xl pb-6'>Transform your body and mind at IronCore Fitness —  </span>  "where strength meets determination.
                    Our state-of-the-art gym offers top-quality equipment, expert trainers, and a motivating atmosphere to help you reach your fitness goals. Whether you're building muscle, burning fat, or improving endurance, we have everything you need to stay consistent and strong. Join us today and take the first step toward a healthier, more confident you!"</h2>
            </div>

            <div className='md:mt-10 lg:absolute lg:top-200 lg:w-11/12 mt-2 mb-10'>
                <h2 className='text-5xl lg:text-7xl gb-base-100 p-4  border-2 border-white lg:border-none font-bold text-center py-10'>Get Our Membership</h2>
            </div>

            <div className='lg:absolute lg:w-11/12 lg:top-260 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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