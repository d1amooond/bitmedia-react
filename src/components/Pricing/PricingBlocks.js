import React from 'react';
import PricingBlock from './PricingBlock';
const PricingBlocks = ({rates}) => {
    return (
        <div className="pricingBlocks">
            {rates.map(el => <PricingBlock
                key={el.title}
                icon={el.icon}
                title={el.title}
                services={el.services}
                price={el.price}/>)}
        </div>
    )
}
export default PricingBlocks;