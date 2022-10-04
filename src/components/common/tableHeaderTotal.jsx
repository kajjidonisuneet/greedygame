import React from 'react';
import numeral from 'numeral'


const TableHeaderTotal = ({column, format}) => {
    console.log(column)
    return ( <p>{numeral(column.total).format(format)}</p> );
}
 
export default TableHeaderTotal;{}