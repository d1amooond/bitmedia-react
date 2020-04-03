import React from 'react';
import './HomeHeader.scss';
import Logo from './Logo';
import Title from "./Title";
import Description from "./Description";
import Button from "../BasicElements/Button";
import Phone from "./Phone";


const HomeHeader = () => {
    return (
        <header className="homeHeader">
            <div className="leftSide">
                <Logo />
                <Title />
                <Description />
                <Button text={"View Stats"}/>
            </div>
            <div className="rightSide">
                <Phone />
            </div>
        </header>
    );

}
export default HomeHeader;