import React, { Fragment } from 'react';
import TableUserLink from "./TableUserLink";

const TableUser = ({id, first_name, last_name, email, gender, ip_address, total_clicks, total_page_views}) => {

    return (
            <Fragment>
                {
                    <TableUserLink className="tr" to={"/user/" + id}>
                        <td>{id}</td>
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{email}</td>
                        <td>{gender}</td>
                        <td>{ip_address}</td>
                        <td>{total_clicks}</td>
                        <td>{total_page_views}</td>
                    </TableUserLink>


                }
            </Fragment>
    )

}

export default TableUser;