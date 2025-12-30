import React from 'react';

const ResetCounter = ({reset}) => {
    return (
        <button className='btn btn-danger' onClick={reset}>Reset</button>
    );
}

export default ResetCounter;