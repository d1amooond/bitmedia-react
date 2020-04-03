import React from 'react';
import InfoBlock from './InfoBlock';
const InfoBlocks = ({infoBlocks}) => {
    return (
        <div className="infoBlocks">
            {infoBlocks.map(el => <InfoBlock
                key={el.title}
                icon={el.icon}
                title={el.title}
                description={el.description} />)}
        </div>
    )
}
export default InfoBlocks;