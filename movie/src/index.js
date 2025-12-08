import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.scss';
import Provider from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider>
            <App />
        </Provider>
    </StrictMode>
);
