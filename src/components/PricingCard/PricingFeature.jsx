import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex '> <CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeature;