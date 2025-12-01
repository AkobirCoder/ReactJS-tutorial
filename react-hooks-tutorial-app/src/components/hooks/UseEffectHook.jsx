import { useState } from "react";

const UserSecond = ({firstName, lastName, link, login}) => {
    const [counter, setCounter] = useState(0);
    const [age, setAge] = useState(21);
    const [isLogin, setIsLogin] = useState(false);

    const onIncrement = () => {
        setCounter((prevState) => prevState + 1);
    }

    const onDecrement = () => {
        setCounter((prevState) => prevState - 1);
    }

    const onRestart = () => {
        setCounter(0);
    }

    const onAgeHandler = (event) => {
        setAge(event.target.value);
    }

    const onToggleLogin = () => {
        setIsLogin((prevState) => !prevState);
    }

    return (
        <div className='container'>
            <code>useEffect hook:</code>
            <div className='w-75 p-5 mt-5 mx-auto border rounded-3'>
                <h1>Mening ismim - {firstName}, familiyam - {lastName}, yoshim - {age} da.</h1>
                <a href={link} target='_blank' rel='noreferrer'>
                    Mening Telegram profilim.
                </a>
                <p>{counter}</p>
                <input className='form-control my-3' type="text" onChange={onAgeHandler} />
                <div className='text-center mb-3'>
                    <button className='btn btn-success mx-1' onClick={onIncrement}>+</button>
                    <button className='btn btn-danger mx-1' onClick={onDecrement}>-</button>
                    <button className='btn btn-primary mx-1' onClick={onRestart}>0</button>
                </div>
                {isLogin ? <p className='text-center'>{login}</p> : null}
                <div className='text-center'>
                    <button className='btn btn-outline-dark' onClick={onToggleLogin}>Toggle</button>
                </div>
            </div>
        </div>
    );
}

export default UserSecond;