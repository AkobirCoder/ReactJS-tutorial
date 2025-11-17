import { Component } from 'react';
import './Movies-add-form.css';

class MoviesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', // default qiymat, boshqarib bo'ladigan form uchun
            views: '', // default qiymat, boshqarib bo'ladigan form uchun
        }
    }

    changeHandlerInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addFormHandler = (event) => {
        event.preventDefault();

        const {addForm} = this.props;
        const {name, views} = this.state;

        addForm({
            name: name, viewers: views,
        });

        this.setState({
            name: '',
            views: '',
        })
    }

    render() {
        const {name, views} = this.state;
        const {changeHandlerInput, addFormHandler} = this;

        return (
            <div className='movies-add-form'>
                <h3>Yangi kino qo'shish</h3>
                <form className='add-form d-flex' onSubmit={addFormHandler}>
                    <input type="text" className='form-control mx-1 new-post-label' placeholder='Qanday kino?' 
                        onChange={changeHandlerInput} name='name' value={name}
                    />
                    <input type="number" className='form-control mx-1 new-post-label' placeholder="Nechi marotaba ko'rilgan?" 
                        onChange={this.changeHandlerInput} name='views' value={views}
                    />
                    <button className='btn btn-outline-dark ms-1' type='submit'>
                        Qo'shish
                    </button>
                </form>
            </div>
        );
    }
}

// const MoviesAddForm = () => {
//     return (
//         <div className='movies-add-form'>
//             <h3>Yangi kino qo'shish</h3>
//             <form className='add-form d-flex'>
//                 <input type="text" className='form-control mx-1 new-post-label' placeholder='Qanday kino?' />
//                 <input type="number" className='form-control mx-1 new-post-label' placeholder="Nechi marotaba ko'rilgan?" />
//                 <button className='btn btn-outline-dark ms-1' type='submit'>
//                     Qo'shish
//                 </button>
//             </form>
//         </div>
//     );
// }

export default MoviesAddForm;

// Boshqarib bo'ladigan formalardagi qiymatlar `state` larda saqlanadi
// Boshqarib bo'lmaydigan formalardagi qiymatlar `browser` da saqlanadi