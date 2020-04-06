import React, { useState, useEffect} from 'react';
import TableUser from './TableUser';
import StatisticService from "../../services/statistic-service";

const statisticService = new StatisticService();
const { getStatistic } = statisticService;
const Table = ({changeNumberOfPages, page, numberOfPages, elements}) => {

    const [loading, setLoading] = useState(true);

    const [tableData, setTableData] = useState({
        colsText: ['Id',
            'First Name',
            'Last Name',
            'Email',
            'Gender',
            'Ip Address',
            'Total clicks',
            'Total page views'],
        pageData: {
            currentPage: 1,
            elements: 16
        },
        rowsText: []
    })

    useEffect ( () => {
        const getStats = async function(page, elements) {
            const stats =
                await getStatistic.call(statisticService,"http://localhost:3001/getUsers",
                    {
                        page,
                        elements
                    });
            if (numberOfPages !== stats.pages) {
                changeNumberOfPages(stats.pages);
                return false;
            }
            setTableData( (tableData) => {
                return {
                    ...tableData,
                    rowsText:
                    stats.pageData
                }
            });
        };
        setLoading(true);
        setTableData((state) => {
            getStats(page, elements)
            return {
                ...state,
                pageData: {
                    ...state.pageData,
                    currentPage: page
                }
            }
        })
        setLoading(false);
    }, [page, changeNumberOfPages, numberOfPages, elements])

    if (!loading) {
        return (
            <div className="table">
                <table width="100%">
                    <thead>
                    <tr>
                        {tableData.colsText.map((el) => <th key={el}><div>{el}</div></th>)}
                    </tr>
                    </thead>
                    <tbody>

                    { tableData.rowsText.map((el) => {
                        return <TableUser
                            key={el.id}
                            id={el.id}
                            first_name={el.first_name}
                            last_name={el.last_name}
                            email={el.email}
                            gender={el.gender}
                            ip_address={el.ip_address}
                            total_clicks={el.total_clicks}
                            total_page_views={el.total_page_views}
                        />
                    }) }

                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>Wait</div>
    )

}
export default Table;