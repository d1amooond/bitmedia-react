import React from 'react';
import { NavLink } from "react-router-dom";

const Button = ({text}) => {
    return (
        <div className="button">
            <NavLink to={"/users"}>
                <button>{text}</button>
            </NavLink>
        </div>
    )
}
export default Button;