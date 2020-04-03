import React from 'react';
import './Pricing.scss'
import PricingBlocks from "./PricingBlocks";
import PricingService from '../../services/pricing-service';

const pricingService = new PricingService();
const Pricing = () => {

    const rates = pricingService.getRates();
    return (
        <div className="pricing">
            <h3>
                Afforadble Pricing and Packages
                <p> choose your best one</p>
            </h3>
            <p>
                Monotonectally grow strategic
                process improvements vis-a-vis
                integrated resources.
            </p>
            <PricingBlocks rates={rates} />
            <p>
                If you need custom services or Need more? <span>Contact us</span>
            </p>
        </div>
    )
}
export default Pricing;