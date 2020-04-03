import React from 'react';
import "./Information.scss";
import Button from "../BasicElements/Button";
import macbook from "../../assets/images/Information/macbook.png";

const Information = () => {
    return (
        <div className="information">
            <div className="infoBlock">
                <h2>
                    Start Managing your
                    apps business, more faster
                </h2>
                <p>
                    Objectively deliver professional value with diverse web-readiness.
                    Collaboratively transition wireless customer
                    service without goal-oriented catalysts for change.
                    Collaboratively.
                </p>
                <Button text={"Learn More"}/>
            </div>
            <div className="macbook">
                <img
                    alt="macbook"
                    src={macbook} />
            </div>

        </div>
    )
}
export default Information;