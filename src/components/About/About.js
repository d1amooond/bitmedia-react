import React from 'react';
import './About.scss';
import first_block from "../../assets/images/About/first_block.png";
import second_block from "../../assets/images/About/second_block.png";
import third_block from "../../assets/images/About/third_block.png";
import InfoBlocks from "./InfoBlocks";

const About = () => {

    const infoBlocks = [
        {
            title: "Clean Design",
            description: "Increase sales by showing true dynamics of your website.",
            icon: first_block
        },
        {
            title: "Secure Data",
            description: "Build your online store’s trust using Social Proof & Urgency.",
            icon: second_block
        },
        {
            title: "Retina Ready",
            description: "Realize importance of social proof in customer’s purchase decision.",
            icon: third_block
        }
    ]

    return (
        <div className="about">
                <h2>
                    Why <span>small business owners</span> love AppCo?
                </h2>
            <p>
                Our design projects are fresh and simple
                and will benefit your business greatly.
                Learn more about our work!
            </p>
            <InfoBlocks infoBlocks={infoBlocks} />
        </div>
    )
}
export default About;