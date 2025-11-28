import { useState } from 'react';

import './Hook.css';

const User = ({firstName, lastName, link}) => {
    const [counter, setCount] = useState(0);
    const [age, setAge] = useState(21);

    const onIncrement = () => {
        setCount(counter + 1);
    }

    const onDecrement = () => {
        setCount(counter - 1);
    }

    const onRestart = () => {
        setCount(0);
    }

    return (
        <div>
            <div>
                <h1>Mening ismim - {firstName}, familiyam - {lastName}, yoshim - {age} da.</h1>
                <a href={link} target='_blank' rel='noreferrer'>
                    Mening Telegram profilim.
                </a>
                <p>{counter}</p>
                <input type="text" />
                <div>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onRestart}>0</button>
                </div>
            </div>
        </div>
    );
}

export default User;