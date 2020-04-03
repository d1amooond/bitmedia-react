import React, { useState } from 'react';
import Path from "../Path/Path";
import Table from "./Table";
import Navigation from './Navigation';

import "./UsersStatistic.scss";

const UsersStatistic = () => {



    const pages = [
        {title: 'Main page', path: "/"},
        {title: 'User statistics', path: "/users"}];

    const [page, setPage] = useState(1);

    const [numberOfPages, setNumberOfPages] = useState(1);

    const changeNumberOfPages = (pages) => {
        setNumberOfPages(pages)
    }

    const changeCurrentPage = (page) => {
        setPage(page)
        console.log(page);
    }

    return (
        <section className="usersStatistic">
            <Path pages={pages}/>
            <h2>
                Users statistics
            </h2>

            <Table
                numberOfPages={numberOfPages}
                page={page}
                changeNumberOfPages={changeNumberOfPages} />
            <Navigation
                numberOfPages={numberOfPages}
                changeCurrentPage={changeCurrentPage}
                changeNumberOfPages={changeNumberOfPages} />
        </section>
    )

}
export default UsersStatistic;