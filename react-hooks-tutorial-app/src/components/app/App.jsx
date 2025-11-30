import User from '../hook/Hook';

import { Fragment } from 'react/jsx-runtime';
import './App.css';
import State from '../state/State';

const App = () => {
    return (
        <Fragment>
            <User firstName={"Akobir"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} />

            {/* Lifecycle method: */}
            <State firstName={"Azizbek"} lastName={"Usmonov"} link={"https://t.me/c_s_p0308"} login={"Login"} />
        </Fragment>
    );
}

export default App;
