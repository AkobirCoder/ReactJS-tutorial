import { Fragment } from 'react/jsx-runtime';
import './App.css';
import State from '../state/State';
import { useState } from 'react';
import UserSecond from '../hooks/UseEffectHook';
import User from '../hooks/UseStateHook';


const App = () => {
    const [isDisplay, setIsDisplay] = useState(true);

    const deleteDisplayHandler = () => {
        setIsDisplay(prevState => !prevState);
    }

    return (
        <Fragment>
            {/* useState hook: */}
            <User firstName={"Akobir"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} />

            {/* Lifecycle method: */}
            {/* <State firstName={"Azizbek"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} /> */}
            <button className='btn btn-success' onClick={deleteDisplayHandler}>diplay</button>
            {isDisplay
                ? <State firstName={"Azizbek"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} />
                : null
            }

            {/* useEffect hook: */}
            {/* <UserSecond firstName={"AbuBakr"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} /> */}
            {isDisplay
                ? <UserSecond firstName={"AbuBakr"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} />
                : null
            }
        </Fragment>
    );
}

export default App;
