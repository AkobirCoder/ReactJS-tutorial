import React from 'react';
import PlusCounter from './PlusCounter';
import MinusCounter from './MinusCounter';
import ResetCounter from './ResetCounter';

// const Counter = ({increment, decrement, reset}) => {
//     return (
//         <div className='btn-group'>
//             <PlusCounter increment={increment} />
//             <MinusCounter decrement={decrement} />
//             <ResetCounter reset={reset} />
//         </div>
//     );
// }

const Counter = () => {
    return (
        <div className='btn-group'>
            <PlusCounter />
            <MinusCounter />
            <ResetCounter />
        </div>
    );
}

export default Counter;