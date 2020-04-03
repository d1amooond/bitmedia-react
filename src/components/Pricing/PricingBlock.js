import React from 'react';


const PricingBlock = ({icon, title, price, services }) => {

    return (
        <div className="pricingBlock">
            <h3>{title}</h3>
            <img alt="iconPrice" src={icon} />
            <h2>{"$" + price}</h2>
            <hr />
            <ul>
                {services.map(el => <li key={el}>{el}</li>)}
            </ul>
            <button className="buttonPurchase">Purchase now</button>
        </div>
    )
}
export default PricingBlock;