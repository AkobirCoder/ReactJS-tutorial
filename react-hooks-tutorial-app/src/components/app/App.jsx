import User from '../hook/Hook';

import { Fragment } from 'react/jsx-runtime';
import './App.css';

function App() {
    return (
        <Fragment>
            <User firstName={"Akobir"} lastName={"Usmonov"} link={"https://t.me/csr0308"}/>
        </Fragment>
    );
}

export default App;
