import React from 'react';


const InfoBlock = ({icon, title, description}) => {

    return (
        <div className="block">
            <img alt="iconAbout" src={icon} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default InfoBlock;