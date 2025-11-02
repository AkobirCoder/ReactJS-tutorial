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


const User = ({firstName, lastName, link}) => { // `props` ni distruktizatsiya qilish
    // console.log(props);
    return (
        <div
            style={{
                textAlign: "justify",
                maxWidth: "1400px",
                margin: "0 auto"
            }}
        >
            <h1>Mening ismim - {firstName.name}, familiyam - {lastName()}</h1>
            <a href={link} target='_blank' rel='noreferrer'>Mening youtube kanalim</a>
        </div>
    );
}

function App() {
  return (
    <div className='App'>
        <StrictMode>
            <Header />
        </StrictMode>
        <Navbar/>
        <Field />
        <Button />

        {/* Component xususiyatlari */}
        <User firstName={{name: "Akobir"}} lastName={() => "Usmonov"} link="https://youtube.com" />
        <User firstName={{name: "Umar"}} lastName={() => "Shamsiyev"} link="https://google.com" />
        <User firstName={{name: "Kamron"}} lastName={() => "Ismoilov"} link={"https://facebook.com"} />
    </div>
  );
}

export default App;