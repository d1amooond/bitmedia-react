import React from 'react';
import PathItem from "./PathItem";
import "./Path.scss";

const Path = ({pages}) => {

    return (
        <div className="path">
            {pages.map((el) => pages.indexOf(el) === pages.length - 1
                ? <PathItem
                    key={el.title}
                    color="blue"
                    item={el} />
                : <PathItem
                    key={el.title}
                    item={el} />)}
        </div>
    )
}

export default Path;