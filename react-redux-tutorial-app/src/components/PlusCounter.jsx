import React from 'react';

const AddCounter = ({increment}) => {
    return (
        <button className='btn btn-success' onClick={increment}>Plus</button>
    );
}

export default AddCounter;