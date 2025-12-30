import React, { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => {
            return prevState + 1;
        });
    }

    const decrement = () => {
        setCount((prevState) => {
            return prevState - 1;
        });
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className='container'>
            <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
                <h1>Counter: {count}</h1>
                <Counter increment={increment} decrement={decrement} reset={reset} />
            </div>
        </div>
    );
}

export default App;