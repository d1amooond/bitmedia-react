import React from 'react';

const NavigationItem = ({page, currentPage, setCurrentPage}) => {

    const classNames = page === currentPage ? 'activeLink' : '';

    return (
        <div
            className={"navigationLink " + classNames}
            onClick={() => setCurrentPage(page)}>
            {page}
        </div>
    )
}
export default NavigationItem;