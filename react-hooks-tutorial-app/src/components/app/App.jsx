import User from '../hook/Hook';

import { Fragment } from 'react/jsx-runtime';
import './App.css';
import State from '../state/State';

const App = () => {
    return (
        <Fragment>
            <User firstName={"Akobir"} lastName={"Usmonov"} link={"https://t.me/csr0308"} login={"Login"} />
            <State />
        </Fragment>
    );
}

export default App;
