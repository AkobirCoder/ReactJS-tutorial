import React, {useRef, useState } from 'react'

const UseRefHook = () => {
    const [cardNumber, setCardNumber] = useState('');

    const cvcRef = useRef(null);

    const handleInput = (event) => {
        const val = event.target.value;

        setCardNumber(val);

        if (val.length === 16) {
            cvcRef.current.focus();
        }
    }

    return (
        <div className='container mb-5'>
            <code>useRef hook:</code>
            <div className='w-75 p-5 mt-5 mx-auto border rounded-3'>
                <h1 className='fs-3 fw-light text-center'>useRef hook:</h1>
                <input type="text" className='form-control mt-3' placeholder='Card number' value={cardNumber} onChange={handleInput} />
                <input ref={cvcRef} type="text" className='form-control mt-3 w-25' placeholder='Secure number' />
            </div>
        </div>
    );
}

export default UseRefHook;