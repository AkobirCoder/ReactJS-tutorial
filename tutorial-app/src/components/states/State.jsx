import React, {Component} from 'react';

import logo from '../../logo.svg';
import './State.css';

class MyFirstState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            text: "text",
        }
    }

    incrementHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
            text: prevState.text + ' !',
        }));
    }

    decrementHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1,
            // if (text === NaN) {
            //     text: "text",
            // } else {
            //     text: prevState.text - ' !',
            // }
        }));
    }

    resetHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter = 0,
            text: "text"
        }));
    }

    render() {
        const {firstName, age, link} = this.props;

        return(
            <div className='state'>
                <div className='state-card'>
                    <div>
                        <h4 className='card-title'>
                            Hello, my name is {firstName}, I am {age} years old.
                        </h4>
                        <a href={link} rel='noreferrer'>This is my account</a>
                        <div className='card-button'>
                            <button onClick={this.incrementHandler} className='btn btn-success'>Inc++</button> {/* hook qo'shish */}
                            <button onClick={this.decrementHandler} className='btn btn-danger'>Dec--</button>
                            <button onClick={this.resetHandler} className='btn btn-reset'>Reset</button>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "0.5rem"
                        }}
                    >
                        <img src={logo} alt="logo" />
                        <p className='card-text' >
                            {this.state.counter} {this.state.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyFirstState;