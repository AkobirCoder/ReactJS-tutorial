import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client'; // client and production
import './index.css';
import App from './components/app/App';

// const name = "Akobir";

// const text = "How are you?";

// const block = (
//     <div 
//         style={{textAlign: "center"}}
//     >
//         <h1 
//             style={{fontSize: "5rem", color: "red", margin: "0rem"}} 
//             className='greeting' tabIndex={1}
//         >
//             Hi, {name}
//         </h1>
//         <p tabIndex={2}>
//             Text: {text} <br />
//             {10 * 10} <br /> 
//             {[1, 2, 3, 4, 5, 'bir', 'ikki', 'uch'].map((item, index) => (
//                 <span key={index}>{item}</span>
//             ))}
//         </p> 
//         <input type="text" name="name" id="name" />
//         <button>Click</button>
//     </div>
// );

// const el = React.createElement("h1", null, "Hello world!");

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

    <StrictMode>
        <App/>
    </StrictMode>

    // block
);
