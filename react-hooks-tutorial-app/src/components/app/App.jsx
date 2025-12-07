import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import './App.css';
import State from '../state/State';
import User from '../hooks/UseStateHook';
import UserSecond from '../hooks/UseEffectHook';
import UseCallbackHook from '../hooks/UseCallbackHook';
import UseMemoHook from '../hooks/UseMemoHook';
import UseRefHook from '../hooks/UseRefHook';
import CustomHook from '../hooks/CustomHook';

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

            {/* useCallback hook: */}
            <UseCallbackHook />

            {/* useMemo hook: */}
            <UseMemoHook />

            {/* useRef hook: */}
            <UseRefHook />

            {/* customHook: */}
            <CustomHook />
        </Fragment>
    );
}

export default App;
