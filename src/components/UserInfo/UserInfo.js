import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Path from "../Path/Path";
import "./UserInfo.scss";
import Charts from "./Charts";
import StatisticService from "../../services/statistic-service";
const statisticService = new StatisticService();
const { getUserInfo } = statisticService;

const UserInfo = (props) => {

    const [userInfo, setUserInfo] = useState({from: "2019-10-24", to: "2019-10-30", loading: true});

    useEffect(() => {
        const getUser = async (from, to) => {
            setUserInfo((state) => {
                return {
                    ...state,
                    loading: true
                }
            })
            const id = props.match.params.id;
            const userInfo = await getUserInfo.call(
                statisticService,
                'http://localhost:3001/getUser',
                {id: Number(id), from, to})

            setUserInfo((state) => {
                return {
                    ...state,
                    loading: false,
                    first_name: userInfo.first_name,
                    last_name: userInfo.last_name,
                    statistic: userInfo.statistic }
            })
        }

        getUser(userInfo.from, userInfo.to);
    }, [props, userInfo.from, userInfo.to])

    const changeDate = (which, date) => {
        console.log(date);
        if (which === 'from') {
            setUserInfo((state) => {
                return {
                    ...state,
                    from: date
                }
            })
        }   else {
            setUserInfo((state) => {
                return {
                    ...state,
                    to: date
                }
            })
        }
    }

    const pages = [
        {title: 'Main page', path: "/"},
        {title: 'User statistics', path: "/users"},
        {title: `${userInfo.first_name} ${userInfo.last_name}`, path: ""}];

    if (!userInfo.loading) {
        return (
            <section className="userInfo">
                <Path pages={pages}/>
                <h2>
                    {userInfo.first_name + " " + userInfo.last_name}
                </h2>
                <div>From<input onChange={(e) => changeDate("from", e.target.value)} value={userInfo.from} type="date"/></div>
                <div>To<input onChange={(e) => changeDate("to", e.target.value)} value={userInfo.to} type="date" /></div>
                <Charts statistic={userInfo.statistic}/>
            </section>
        )
    }   else {
        return (
            <section className="userInfo">
                <div>Wait</div>
            </section>
        )
    }

}

export default withRouter(UserInfo);