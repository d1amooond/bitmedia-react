import React, { Fragment } from 'react';
import HomeHeader from "../components/HomeHeader/HomeHeader";
import About from "../components/About/About";
import Information from "../components/Information/Information";
import Pricing from "../components/Pricing/Pricing";
import HomeFooter from "../components/HomeFooter/HomeFooter";

const HomePage = () => {

    return (
        <Fragment>
            <HomeHeader />
            <About />
            <Information />
            <Pricing />
            <HomeFooter />
        </Fragment>


    )

}
export default HomePage;