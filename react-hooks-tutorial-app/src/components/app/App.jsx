// import User from '../hook/Hook';

import { Fragment } from 'react/jsx-runtime';
import './App.css';
import State from '../state/State';
import { useState } from 'react';

const App = () => {
    const [isDisplay, setIsDisplay] = useState(true);

    const deleteDisplayHandler = () => {
        setIsDisplay(prevState => !prevState);
    }

    return (
        <Fragment>
            {/* <User firstName={"Akobir"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} /> */}

            {/* Lifecycle method: */}
            {/* <State firstName={"Azizbek"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} /> */}
            <button className='btn btn-success' onClick={deleteDisplayHandler}>diplay</button>
            {isDisplay
                ? <State firstName={"Azizbek"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} />
                : null
            }
        </Fragment>
    );
}

export default App;
