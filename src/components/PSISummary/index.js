import React from 'react';
import PSIChart from '../Charts/PSIChart';

const PSISummary = ({psi, description}) => {        
    return (
        <div className="d-flex p-2 pb-3 overflow">
            <div className="mb-0">
                <h4 className="text-center mb-0">PSI</h4>
                <h2 className="mb-0 text-center">{psi}</h2>
                <p>{description}</p>
            </div>
            <PSIChart className="fill" />
        </div>
    )
};

PSISummary.defaultProps = {
    psi:49,
    description:'Moderate'
}

export default PSISummary;