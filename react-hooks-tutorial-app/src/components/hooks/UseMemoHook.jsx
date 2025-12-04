import React, { useState } from 'react'

const UseMemoHook = () => {
    const [counter, setCount] = useState(0);
    const [active, setActive] = useState(true);

    const colors = {
        fontWeight: 'bold',
        color: active ? 'green' : 'red',
    }

    const onIncrement = () => {
        setCount((prevState) => {
            return prevState + 1;
        });
    }

    const onToggle = () => {
        setActive((prevState) => {
            return !prevState;
        });
    }

    return (
        <div className='container mb-5'>
            <code>useMemo hook:</code>
            <div className='w-75 p-5 mt-5 mx-auto border rounded-3'>
                <h1 className='fs-3 fw-light text-center'>useMemo hook:</h1>
                <p style={colors} className='text-center'>User activated {counter}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success mx-2" type="button" onClick={onIncrement}>
                        Increase
                    </button>
                    <button className="btn btn-warning mx-2" type="button" onClick={onToggle}>
                        Toggle
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UseMemoHook;