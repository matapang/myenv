import React from 'react';
import PropTypes from 'prop-types';
const Table = ({rows = [], columns = []}) => {    
    return (
        <table className="pt-html-table pt-interactive">
            <thead>
                <tr className="border-bottom">
                    {columns.map((c,key)=> <th key={key} >{c.headerName}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((r,rKey)=> <tr key={rKey}>
                     {columns.map((c,key)=> <td key={key} className={`border-top ${key === columns.length - 1 ? "w-100" :""}`} >{r[c.name]}</td>)}
                
                </tr>)}
            </tbody>
      </table>          
    )
};

Table.propTypes = {
    rows:PropTypes.arrayOf(PropTypes.object),
    columns:PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string, headerName:PropTypes.string}))
}

export default Table;