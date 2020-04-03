import React, { useState, useEffect } from 'react';
import NavigationItem from "./NavigationItem";

import arrow from "../../assets/images/UserStatistic/arrow.png";
import arrow_active from "../../assets/images/UserStatistic/arrow_active.png";

const Navigation = ({numberOfPages, changeCurrentPage}) => {

    const [navigationData, setNavigationData] = useState({
        currentPage: 1,
        firstPage: 1,
        lastPage: 5,
    })

    useEffect(() => {
        changeCurrentPage(navigationData.currentPage)
        console.log('change')
    }, [navigationData.currentPage, changeCurrentPage])


    const arrPages = (firstPage, lastPage) => {
        const arr = [];
        for (let i = firstPage; i <= lastPage; i++) {
              arr.push(i);
        }
        return arr;
    }

    const clickOnTheRightArrow = () => {
        console.log(navigationData);
        console.log(numberOfPages)
        if (navigationData.lastPage !== numberOfPages) {
            setNavigationData({...navigationData,
                firstPage: navigationData.firstPage + 1,
                lastPage: navigationData.lastPage + 1})
        }   else {
            return false;
        }
    }
    const clickOnTheLeftArrow = () => {
        if (navigationData.firstPage !== 1) {
            setNavigationData({...navigationData,
                firstPage: navigationData.firstPage - 1,
                lastPage: navigationData.lastPage - 1})
        }   else {
            return false;
        }
    }

    const setCurrentPage = (page) => {
        if (navigationData.currentPage !== page) {
            setNavigationData({...navigationData, currentPage: page})
            changeCurrentPage(page);
        }
    }


            return (
                <nav className={"navigation"}>
                    <div
                        className="navigation_left"
                        onClick={clickOnTheLeftArrow}>
                        {
                          navigationData.firstPage === 1
                              ? <img
                                  alt="arrow"
                                  src={arrow} />
                              : <img
                                  alt="arrow"
                                     className={"change"}
                                     src={arrow_active} />
                        }
                    </div>
                    {arrPages(navigationData.firstPage,
                        navigationData.lastPage)
                        .map((el) => <NavigationItem
                                            key={el}
                                            currentPage={navigationData.currentPage}
                                            page={el}
                                            setCurrentPage={setCurrentPage}/>)}
                    <div
                        className="navigation_right"
                        onClick={clickOnTheRightArrow}>
                        {navigationData.lastPage === numberOfPages
                            ? <img
                                alt="arrow"
                                className={"change"}
                                src={arrow} />
                            : <img
                                alt="arrow"
                                src={arrow_active} />}
                    </div>
                </nav>
            )
    }

export default Navigation;