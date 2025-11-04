import React, {Component} from 'react';

import logo from '../../logo.svg';
import './State.css';

class MyFirstState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    clickHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
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
                            <button onClick={this.clickHandler} className='btn'>Click</button> {/* hook qo'shish */}
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
                            {this.state.counter}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyFirstState;