import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCounter } from '../reducers/countSlice';

// const ResetCounter = ({reset}) => {
//     return (
//         <button className='btn btn-danger' onClick={reset}>Reset</button>
//     );
// }

const ResetCounter = () => {
    const dispatch = useDispatch();

    return (
        <button className='btn btn-danger' onClick={() => dispatch(resetCounter())}>Reset</button>
    );
}

export default ResetCounter;