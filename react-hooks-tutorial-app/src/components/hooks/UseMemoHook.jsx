import React, { useMemo, useState } from 'react';

const bigCountNumber = (number) => {
    // console.log('Render');

    let i = 0;

    while (i < 1000000000) {
        i++;
    } 

    return number * 2;
}

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

    const number = useMemo(() => {
        return bigCountNumber(counter);
    }, [counter]);

    return (
        <div className='container mb-5'>
            <code>useMemo hook:</code>
            <div className='w-75 p-5 mt-5 mx-auto border rounded-3'>
                <h1 className='fs-3 fw-light text-center'>useMemo hook:</h1>
                <p style={colors} className='text-center'>User activated {number}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success mx-2" type="button" name='inc' onClick={onIncrement}>
                        Increase
                    </button>
                    <button className="btn btn-warning mx-2" type="button" onClick={onToggle}>
                        Toggle
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default UseMemoHook;