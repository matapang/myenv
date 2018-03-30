import React from 'react';
import PropTypes from 'prop-types';
import Table from '../Table';

const COLUMNS = [
    {name:'time', headerName:'Time'},
    {name:'height', headerName:'Height(m)'},
    {name:'hl', headerName:'High/Low'},
]
const TideTable = ({data}) => {    
    return <Table rows={data} columns={COLUMNS}/>;
};

//Mock data
TideTable.defaultProps = {
    data:[
        { time:"13:00", height:3.1, hl:'H' },
        {time:"19:00", height:0.3, hl:'L' },
        {time:"23:15", height:2.9, hl:'H' }      
    ]
}

TideTable.propTypes = {
    data:PropTypes.array
}

export default TideTable;