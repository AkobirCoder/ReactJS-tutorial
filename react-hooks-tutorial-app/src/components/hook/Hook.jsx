import { useState } from 'react';

import './Hook.css';

const User = ({firstName, lastName, link}) => {
    const [counter, setCount] = useState(0);
    const [age, setAge] = useState(21);

    console.log(counter);

    return (
        <div>
            <div>
                <h1>Mening ismim - {firstName}, familiyam - {lastName}, yoshim - {age} da.</h1>
                <a href={link} target='_blank' rel='noreferrer'>
                    Mening Telegram profilim.
                </a>
                <p>{counter}</p>
            </div>
        </div>
    );
}

export default User;