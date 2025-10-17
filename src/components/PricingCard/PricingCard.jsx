import React from 'react';
import { CircleCheckBig } from 'lucide-react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
    const {name, price, duration, features}=pricing
    return (
        <div className='border bg-gradient-to-t from-amber-700 via-amber-500 to-amber-800 p-4 rounded-2xl'>
            {/* card header */}
            <div>
                <h1 className="text-7xl mb-2 font-bold">{name}</h1>
                <h4 className="text-4xl mb-2 font-medium">{price}</h4>
                <h3 className="text-2xl mb-2 font-medium flex  items-center"><CircleCheckBig className='mr-2'></CircleCheckBig> {duration}</h3>
            </div>
            {/* card body */}
            <div>
                <p className='bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 text-gray-950 font-medium p-2 rounded-box shadow mt-4'>
                 <span className='text-xl font-bold '>description: <br /></span>   {pricing.description}</p>

                <div className='p-4 mt-8 rounded-box bg-gradient-to-r from-amber-700 to-amber-400 shadow-2xl'>
                    <p  className='text-xl font-bold mt-2 mb-2'>Features:</p>

                    {
                        features.map((feature, index) => <PricingFeature 
                        key={index}
                            feature={feature}
                            ></PricingFeature>)
                    }                   
                </div>
            </div>
        </div>
    );
};

export default PricingCard;