import React, {Component} from 'react';
import { StrictMode } from 'react';

import { Header, Navbar } from '../header/Header';
import Field from '../field/Field';
import Button from '../button/Button';

import MyFirstState from '../states/State';

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


// Function component:

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


// Class component:

class UserSecond extends Component {
    constructor(props) {
        super(props);
        this.age = props.age; // yangi property qo'shish
    }

    render() {
        const {name, surname, link} = this.props;

        console.log(this.props);

        return (
            <div
                style={{
                    textAlign: "justify",
                    maxWidth: "1400px",
                    margin: "0 auto"
                }}    
            >
                <h1>My name is - {name}, my surname is - {surname}, my age is - {this.age}</h1>
                <a href={link} target='_blank' rel='noreferrer'>This is my youtube channel</a>
            </div>
        );
    }
}


// States:



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
        <User firstName={{name: "Alibek"}} lastName={() => "Hakimov"} link={"https://telegram.org"} />

        {/* Class components: */}
        <UserSecond name={"Jack"} surname={"Nicolson"} link={"https://instagram.com"} age={54} />

        {/* States: */}
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly"
            }}
        >
            <MyFirstState firstName={"Artyom"} lastName={"Maratov"} link={"https://youtube.com"} />
            <MyFirstState firstName={"Artyom"} lastName={"Maratov"} link={"https://youtube.com"} />
        </div>
    </div>
  );
}

export default App;