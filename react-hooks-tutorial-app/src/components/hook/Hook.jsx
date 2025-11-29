import { useState } from 'react';

import './Hook.css';

const User = ({firstName, lastName, link, login}) => {
    const [counter, setCount] = useState(0);
    const [age, setAge] = useState(21);
    const [isLogin, setIsLogin] = useState(false);

    // const onIncrement = () => {
    //     setCount(counter + 1);
    // }


    // `prevState` ya'ni avvalgi holati holati orqali o'zgartirish:

    // const onIncrement = () => {
    //     setCount(prevState => {
    //         return prevState + 1;
    //     });
    // }

    // const onIncrement = () => {
    //     setCount(counter + 1);
    //     setCount(counter + 1); // bu ikkala setCount funksiyasi bitta bo'lgani uchun 100 marta chaqirilsa ham bir marta ishlaydi.
    // }

    
    // counter +2 ga o'zgaradi:
    
    const onIncrement = () => {
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1); // ammo `prevState` orqali o'zgartirilsa avvalgi holatini o'zgartirib nechi marta chaqirilsa o'shancha marta o'zgaradi.
    }

    // const onDecrement = () => {
    //     setCount(counter - 1);
    // }

    const onDecrement = () => {
        setCount(prevState => (prevState - 1));
        setCount(prevState => (prevState - 1));
    }

    const onRestart = () => {
        setCount(0);
    }

    const onAgeHandler = (e) => {
        setAge(e.target.value);
    }

    const onToggleLogin = () => {
        setIsLogin(prevState => !prevState);
    }


    // Hooklarda obyektlardan foydalanish:

    return (
        <div>
            <div>
                <h1>Mening ismim - {firstName}, familiyam - {lastName}, yoshim - {age} da.</h1>
                <a href={link} target='_blank' rel='noreferrer'>
                    Mening Telegram profilim.
                </a>
                <p>{counter}</p>
                <input type="text" onChange={onAgeHandler} />
                <div>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onRestart}>0</button>
                </div>
                {isLogin ? <p>{login}</p> : null}
                <div>
                    <button onClick={onToggleLogin}>Toggle</button>
                </div>
            </div>
        </div>
    );
}

export default User;