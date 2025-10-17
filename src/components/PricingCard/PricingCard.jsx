import React from 'react';
import { CalendarClock } from 'lucide-react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const { name, price, duration, features } = pricing
    return (
        <div className='flex flex-col border bg-gradient-to-t from-amber-700 via-amber-500 to-amber-800 p-4 rounded-2xl '>
            {/* card header */}
            <div>
                <h1 className="text-7xl mb-2 font-bold">{name}</h1>
                <h4 className="text-4xl mb-2 font-medium">{price}</h4>
                <h3 className="text-2xl mb-2 font-medium flex  items-center"><CalendarClock className='mr-2'></CalendarClock> {duration}</h3>
            </div>
            {/* card body */}
            <div className=''>
                <p className='bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 text-gray-950 font-medium p-2 rounded-box shadow mt-4'>
                    <span className='text-xl font-bold'>description: <br /></span>   {pricing.description}</p>
            </div>

            <div className=' flex-1 p-4 mt-8 rounded-box bg-gradient-to-r from-amber-700 to-amber-400 shadow-2xl'>
                <p className='text-xl font-bold mt-2 mb-2'>Features:</p>
                
                {
                    features.map((feature, index) => <PricingFeature
                        key={index}
                        feature={feature}
                    ></PricingFeature>)
                }
            </div>

            <button className="btn w-full bg-gradient-to-r from-amber-800 via-amber-400 to-amber-800 text-xl mt-8">Subscribe</button>
        </div>
        
    );
};

export default PricingCard;