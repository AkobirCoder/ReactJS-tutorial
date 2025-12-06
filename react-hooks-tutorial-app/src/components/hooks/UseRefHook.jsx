import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cvcNumber, setCvcNumber] = useState('');

    const cvcRef = useRef(null);
    const dateRef = useRef(null);

    const handleInput = (event) => {
        const value = event.target.value;

        setCardNumber(value);

        if (value.length === 16) {
            return cvcRef.current.focus();
        }
    }

    const handleInputCvc = (event) => {
        const value = event.target.value;

        setCvcNumber(value);

        if (value.length === 3) {
            return dateRef.current.focus();
        }
    }

    return (
        <div className='container mb-5'>
            <code>useRef hook:</code>
            <div className='w-75 p-5 mt-5 mx-auto border rounded-3'>
                <h1 className='fs-3 fw-light text-center'>useRef hook:</h1>
                <input type="text" className='form-control mt-3' placeholder='Card number' onChange={handleInput} value={cardNumber} />
                <input ref={cvcRef} type="text" className='form-control mt-3 w-25' placeholder='Secure number' onChange={handleInputCvc} value={cvcNumber} />
                <input ref={dateRef} type="text" className='form-control mt-3 w-25' placeholder='Year/Month' />
            </div>
        </div>
    );
}

export default UseRefHook;

// state o'zgarib render bo'lganda reflar o'zgarmaydi. useRef hookining asosiy vazifasi elementga havola qoldirish.