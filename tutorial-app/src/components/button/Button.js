import './Button.css';

const Button = () => {
    const login = 'login';
    const user = true;

    // 1-usul: ternary operator orqali:

    // return (
    //     <button>{user ? 'logout' : login}</button>
    // );


    // 2-usul: if statement orqali:

    if (user) {
        return (
            <button>logout</button>
        );
    } else {
        return (
            <button>{login}</button>
        );
    }
}

export default Button;