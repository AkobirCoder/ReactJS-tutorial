import { Component } from "react";

import './State.css';

import logo from '../../logo.svg';

class StateSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            text: 'text',
        }
    }

    onIncrement = () => {
        // this.setState(() => {
        //     return {
        //         counter: this.state.counter + 1,
        //     }
        // });

        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }));
    }

    onDecrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1,
        }));
    }

    onRestart = () => {
        // this.setState(prevState => ({
        //     counter: prevState.counter = 0,
        // }));

        this.setState({
            counter: 0,
        });
    }

    render() {
        const {ism, familiya, havola} = this.props;

        return(
            <div className="cards">
                <div className="card">
                    <div className="card-info">
                        <h4>Mening ismim - {ism}, familiyam - {familiya}</h4>
                        <a href={havola} target="_blank" rel="noreferrer">Mening shaxsiy kanalim</a>
                        <p>{this.state.text}</p>
                        <div className="card-buttons">
                            <button onClick={this.onIncrement} className="btn">Increment</button>
                            <button onClick={this.onDecrement} className="btn">Decrement</button>
                            <button onClick={this.onRestart} className="btn">Restart</button>
                        </div>
                    </div>
                    <div className="card-img">
                        <img src={logo} alt="logo" />
                        <p>{this.state.counter}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default StateSecond;

// setState() metodi state da ko'rsatilgan qiymatni o'zgartiradi.