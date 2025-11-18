import { Component } from "react";

import './State.css';

import logo from '../../logo.svg';

class StateSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            text: 'text',
            age: '',
        }

        // Oddiy metod bo'lganda functionga context this ni bog'lashning 1-usuli:

        this.onIncrement = this.onIncrement.bind(this); // `bind()` orqali bog'lash
    }

    onIncrement() { // bu holatda react development holatida `strict mode` rejimida ishlagani bois `context this` yo'qolib `undefined` chiqaradi
        // this.setState(() => {
        //     return {
        //         counter: this.state.counter + 1,
        //     }
        // });

        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }));
    }

    onDecrement() {
        console.log(this);

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


    // 3-usuli: Arrow funtion

    changeHandlerInput = (e, name) => {
        console.log(name);

        this.setState({
            age: e.target.value,
        });
    }

    render() {
        const {ism, familiya, havola} = this.props;
        const {counter, age} = this.state;
        const {onIncrement, changeHandlerInput} = this;

        return(
            <div className="cards">
                <div className="card">
                    <div className="card-info">
                        <h4>Mening ismim - {ism}, familiyam - {familiya}. Yoshim - {age}</h4>
                        <a href={havola} target="_blank" rel="noreferrer">Mening shaxsiy kanalim</a>
                        {/* <p>{text}</p> */}
                        <div className="card-buttons">
                            <button onClick={onIncrement} className="btn btn-inc">Increment</button>
                            <button onClick={() => this.onDecrement()} className="btn btn-dec">Decrement</button> {/* context this ni bog'lashning 2-usuli */}
                            <button onClick={this.onRestart} className="btn btn-res">Restart</button>
                        </div>
                    </div>
                    <div className="card-img">
                        <img src={logo} alt="logo" />
                        <p>{counter}</p>
                    </div>
                </div>
                <form>
                    <span>Yoshingiz:</span>
                    <input type="text" onChange={(e) => changeHandlerInput(e, 'Akobir')} /> {/* `state` dagi metodga argumentiga parameter berish */}
                </form>
            </div>  
        );
    }
}

export default StateSecond;

// setState() metodi state da ko'rsatilgan qiymatni o'zgartiradi.