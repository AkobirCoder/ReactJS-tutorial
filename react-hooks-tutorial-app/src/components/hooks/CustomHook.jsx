// import React, { useState } from 'react';
import useInputValidation from "./custom/hook/UseInputValidation";

// useInputValidation hooki tashqariga chiqarilgan

// const useInputValidation = (initialValue) => {
//     const [value, setValue] = useState(initialValue);

//     const onChange = (event) => {
//         setValue(event.target.value);
//     }

//     const validateInput = () => {
//         return value.search(/\d/) >= 0 ? true : false;

//         // if (value.search(/\d/) >= 0) {
//         //     return true;
//         // } else {
//         //     return false;
//         // }
//     }

//     const validateColor = validateInput() ? 'text-danger' : null;

//     return {value, onChange, validateInput, validateColor};
// }

const CustomHook = () => {
    const firstName = useInputValidation('');
    const lastName = useInputValidation('');

    // const validateColorFirstName = firstName.validateInput() ? 'text-danger' : null;
    // const validateColorLastName = lastName.validateInput() ? 'text-danger' : null;


    // without customHook:

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    // const validateInput = (text) => {
    //     if (text.search(/\d/) >= 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // const validateColorFirstName = validateInput(firstName) ? 'text-danger' : null;
    // const validateColorLastName = validateInput(lastName) ? 'text-danger' : null;

    return (
        <div className='container mb-5'>
            <code>customHook</code>
            <div className='w-50 p-5 mt-5 mx-auto border rounded-3'>
                <h1 className='fs-3 fw-light text-center'>
                    customHook
                </h1>
                <p className='text-center fs-3'>Register</p>
                <div className='d-flex gap-3'>
                    <input
                        type="text" 
                        // className={`form-control ${validateColorFirstName}`} 
                        className={`form-control ${firstName.validateColor}`}
                        placeholder='Firstname'
                        // value={firstName} 
                        value={firstName.value} 
                        // onChange={(e) => setFirstName(e.target.value)}
                        onChange={firstName.onChange}
                    />
                    <input
                        type="text" 
                        // className={`form-control ${validateColorLastName}`} 
                        className={`form-control ${lastName.validateColor}`}
                        placeholder='Lastname' 
                        // value={lastName} 
                        value={lastName.value} 
                        // onChange={(e) => setLastName(e.target.value)} 
                        onChange={lastName.onChange} 
                    />
                </div>
                <button className='mt-3 btn btn-success'>Send data</button>
            </div>
            <hr />
        </div>
    );
}

export default CustomHook;

// shaxsiy hooklardan foydalanish componentdagi bir xil mazmundagi kodlarni qayta-qayta yozishni oldini oladi.