import first_rate from "../assets/images/Pricing/first_rate.png";
import second_rate from "../assets/images/Pricing/second_rate.png";
import third_rate from "../assets/images/Pricing/third_rate.png";

export default class PricingService {


    getRates() {
        return [
            {
                icon: first_rate,
                title: "Basic",
                price: 29,
                services: ['Push Notifications',
                    'Data Transfer',
                    'SQL Database',
                    'Search & SEO Analytics',
                    '24/7 Phone Support',
                    '2 months technical support',
                    '2+ profitable keyword']
            }, {
                icon: second_rate,
                title: "Standart",
                price: 149,
                services: ['Push Notifications',
                    'Data Transfer',
                    'SQL Database',
                    'Search & SEO Analytics',
                    '24/7 Phone Support',
                    '2 months technical support',
                    '2+ profitable keyword']
            }, {
                icon: third_rate,
                title: "Unlimited",
                price: 39,
                services: ['Push Notifications',
                    'Data Transfer',
                    'SQL Database',
                    'Search & SEO Analytics',
                    '24/7 Phone Support',
                    '2 months technical support',
                    '2+ profitable keyword']
            },

        ]
    }
}