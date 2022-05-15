import React from 'react';

function Display({value}) {
    return (
        <div className='mainDisplay rounded'>
            <label className='mainDisplayLabel'>{value}</label>
        </div>
    )
}

export default Display;