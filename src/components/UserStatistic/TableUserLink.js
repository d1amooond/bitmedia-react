import React from 'react';
import { withRouter } from 'react-router-dom';


const TableUserLink = ({children, history, location, match, staticContext, to, onClick, ...rest }) =>
{
    return (
        <tr
            {...rest} // `children` is just another prop!
            onClick={() => {
                history.push(to)
            }}>
            {children}
        </tr>
    )

}

export default withRouter(TableUserLink);