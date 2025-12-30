import React from 'react';

const MinusCounter = ({decrement}) => {
    return (
        <button className='btn btn-secondary' onClick={decrement}>Minus</button>
    );
}

export default MinusCounter;