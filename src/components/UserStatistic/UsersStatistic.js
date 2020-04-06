import React, { useState } from 'react';
import Path from "../Path/Path";
import Table from "./Table";
import Navigation from './Navigation';
import Select from "./Select";
import "./UsersStatistic.scss";

const UsersStatistic = () => {



    const pages = [
        {title: 'Main page', path: "/"},
        {title: 'User statistics', path: "/users"}];

    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [elements, setElements] = useState(10);

    const changeNumberOfPages = (pages) => {
        setNumberOfPages(pages)
    }

    const changeCurrentPage = (page) => {
        setPage(page)
        console.log(page);
    }

    const onSelectChange = (select) => {
        setElements(select);
    }

    return (
        <section className="usersStatistic">
            <Path pages={pages}/>
            <h2>
                Users statistics
            </h2>
            <Select onSelectChange={onSelectChange}/>

            <Table
                elements={elements}
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