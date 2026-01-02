import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCounter } from '../reducers/countSlice';

// const ResetCounter = ({reset}) => {
//     return (
//         <button className='btn btn-danger' onClick={reset}>Reset</button>
//     );
// }

const ResetCounter = () => {
    // React Redux:

    const dispatch = useDispatch();

    const resetHandler = () => {
        return dispatch(resetCounter());
    }

    return (
        // <button className='btn btn-danger' onClick={() => dispatch(resetCounter())}>Reset</button>
        <button className='btn btn-danger' onClick={resetHandler}>Reset</button>
    );
}

export default ResetCounter;