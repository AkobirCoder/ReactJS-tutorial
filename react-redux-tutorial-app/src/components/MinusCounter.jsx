import React from 'react';
import { useDispatch } from 'react-redux';
import { minusCounter } from '../reducers/countSlice';

// const MinusCounter = ({decrement}) => {
//     return (
//         <button className='btn btn-secondary' onClick={decrement}>Minus</button>
//     );
// }

const MinusCounter = () => {
    // React Redux:

    const dispatch = useDispatch();

    const minusHandler = () => {
        return dispatch(minusCounter());
    }
    
    return (
        // <button className='btn btn-secondary' onClick={() => dispatch(minusCounter())}>Minus</button>
        <button className='btn btn-secondary' onClick={minusHandler}>Minus</button>
    );
}

export default MinusCounter;