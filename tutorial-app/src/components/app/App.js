import { StrictMode } from 'react';
import { Header, Navbar } from '../header/Header';
import Field from '../field/Field';
import Button from '../button/Button';

// import logo from './logo.svg';
import './App.css';

// const Header = () => {
//     const text = 'Hello Akobir';

//     const getText = (name)=> {
//         return (
//             <div>
//                 <h1>{text}</h1>
//                 <h2>Hi, {name}</h2>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit 
//                     autem deleniti nihil corrupti est adipisci enim quasi ea dolorem.
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <div>{getText('Akobir')}</div>
//     );
// }

// const Field = () => {
//     const placeholder = 'Typing...';
//     const typeInput = 'text';

//     return (
//         <input type={typeInput} placeholder={placeholder} />
//     );
// }

// const Button = () => {
//     const login = 'login';
//     const user = true;

//     // 1-usul: ternary operator orqali:

//     // return (
//     //     <button>{user ? 'logout' : login}</button>
//     // );


//     // 2-usul: if statement orqali:

//     if (user) {
//         return (
//             <button>logout</button>
//         );
//     } else {
//         return (
//             <button>{login}</button>
//         );
//     }
// }

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='App'>
        <StrictMode>
            <Header />
        </StrictMode>
        <Navbar/>
        <Field />
        <Button />
    </div>
  );
}

export default App;