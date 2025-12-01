import { Component } from "react";

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            age: 21,
            isLogin: false,
        }
    }

    onIncrement = () => {
        this.setState(({counter}) => {
            return {
                counter: counter + 1,
            }
        });
    }

    onDecrement = () => {
        this.setState(({counter}) => {
            return {
                counter: counter - 1,
            }
        });
    }

    onRestart = () => {
        this.setState(() => {
            return {
                counter: 0,
            }
        });
    }

    onAgeHandler = (event) => {
        this.setState(() => {
            return {
                age: event.target.value,
            }
        });
    }

    onToggleLogin = () => {
        this.setState(({isLogin}) => {
            return {
                isLogin: !isLogin,
            }
        });
    }

    componentDidMount() {
        document.title = `Counter: ${this.state.counter}`;

        console.log('Mounting');
    }

    componentDidUpdate() {
        document.title = `Counter: ${this.state.counter}`;

        console.log('Updating');
    }

    componentWillUnmount() {
        alert('Component will unmount!');

        console.log('Unmounting');
    }

    render() {
        const {firstName, lastName, link, login} = this.props;
        const {counter, age, isLogin} = this.state;
        const {onIncrement, onDecrement, onRestart, onAgeHandler, onToggleLogin} = this;

        return (
            <div className="container">
            <code>Lifecycle method:</code>
                <div className='w-75 p-5 mt-5 mx-auto border rounded-3'>
                    <h1>Mening ismim - {firstName}, familiyam - {lastName}, yoshim - {age} da.</h1>
                    <a href={link} target='_blank' rel='noreferrer'>
                        Mening Telegram profilim.
                    </a>
                    <p>{counter}</p>
                    <input className='form-control my-3' type="text" onChange={onAgeHandler} />
                    <div className='text-center mb-3'>
                        <button className='btn btn-success mx-1' onClick={onIncrement}>+</button>
                        <button className='btn btn-danger mx-1' onClick={onDecrement}>-</button>
                        <button className='btn btn-primary mx-1' onClick={onRestart}>0</button>
                    </div>
                    {isLogin ? <p className='text-center'>{login}</p> : null}
                    <div className='text-center'>
                        <button className='btn btn-outline-dark' onClick={onToggleLogin}>Toggle</button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default State;