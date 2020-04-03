import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const PathItem = ({item, color}) => {
    if (color) {
        return (
            <div className="pathItem">
                <NavLink
                    to={item.path}
                    className={color}>
                    {item.title}
                </NavLink>
            </div>
        )
    } else {
        return (
            <Fragment>
                <div className="pathItem">
                    <NavLink
                        to={item.path}>
                        {item.title}
                    </NavLink>
                </div>
                <div>
                    >
                </div>
            </Fragment>
        )
    }
}

export default PathItem;