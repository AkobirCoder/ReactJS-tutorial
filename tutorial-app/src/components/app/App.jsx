import { Component, StrictMode } from 'react';

import { Header, Navbar } from '../header/Header';
import Field from '../field/Field';
import Button from '../button/Button';

import StateSecond from '../state/State';

import logo from '../../logo.svg';
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
            <h1>Mening ismim - {firstName.name}, familiyam - {lastName()}.</h1>
            <a href={link} target='_blank' rel='noreferrer'>Mening youtube kanalim</a>
        </div>
    );
}


// Class component:

class UserSecond extends Component {
    constructor(props, age) {
        super(props);
        this.age = age;
    }

    render() {
        const {name, surname, link, age} = this.props;

        console.log(this.props);

        return(
            <div
                style={{
                    textAlign: "justify",
                    maxWidth: "1400px",
                    margin: "0 auto"
                }}
            >
                <h1>My name is - {name}, my surname is - {surname}. I'm {age} years old.</h1>
                <a href={link} target='_blank' rel='noreferrer'>This is my channel</a>
            </div>
        );
    }
}


// States:

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    render() {
        return(
            <div
                style={{
                    textAlign: "justify",
                    maxWidth: "1000px",
                    margin: "0 auto",
                    border: "2px solid gray",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: "1rem",
                    background: "#D0D2CD",
                    borderRadius: "1rem"
                }}
            >
                <div style={{flex: "4", margin: "0rem 1.5rem"}}>
                    <h1 style={{margin: "0rem"}}>
                        Title
                    </h1>
                    <p style={{}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sequi, similique fuga amet error eum, commodi praesentium sapiente, omnis doloribus quae consequatur fugiat dolorum quos tempore adipisci molestiae animi dolore.
                    </p>
                </div>
                <img className='App-logo' style={{flex: "1"}} src={logo} alt="Logo" />
            </div>
        );
    }
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
        <User firstName={{name: "Alibek"}} lastName={() => "Hakimov"} link={"https://telegram.org"} />

        {/* Class component xususiyatlari */}
        <UserSecond name={"Alex"} surname={"Bush"} link={"https://telegram.org"} age={41} />

        {/* States */}
        <State />
        <StateSecond ism={"Akobir"} familiya={"Usmonov"} havola={"https://youtube.com"} />
    </div>
  );
}

export default App;