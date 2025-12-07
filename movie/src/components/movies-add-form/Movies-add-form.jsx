import { Component, useState } from 'react';
import './Movies-add-form.scss';

const MoviesAddForm = ({addForm}) => {
    const [state, setState] = useState({
        name: '',
        viewers: '',
    });

    const changeHandlerInput = (event) => {
        setState((prevState) => {
            return {
                ...prevState, [event.target.name]: event.target.value,
            }
        });
    } 

    const addFormHandler = (event) => {
        event.preventDefault();

        // const data = {name: state.name, viewers: state.viewers};

        // addForm(data);

        const {name, viewers} = state;
        
        addForm({name, viewers});

        setState({
            name: '',
            viewers: '',
        });
    }

    const {name, viewers} = state;

    return (
        <div className='movies-add-form'>
            <h3>Yangi kino qo'shish</h3>
            <form className='add-form d-flex' onSubmit={addFormHandler}>
                <input type="text" className='form-control mx-1 new-post-label' placeholder='Qanday kino?' 
                    onChange={changeHandlerInput} name='name' value={name}
                />
                <input type="number" className='form-control mx-1 new-post-label' placeholder="Nechi marotaba ko'rilgan?" 
                    onChange={changeHandlerInput} name='viewers' value={viewers}
                />
                <button className='btn btn-outline-dark ms-1' type='submit'>
                    Qo'shish
                </button>
            </form>
        </div>
    );
}

// class MoviesAddForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '', // inputga value atributi orqali berilsa default qiymat browserda ko'rinadi
//             viewers: '', // inputga value atributi orqali berilsa default qiymat browserda ko'rinadi
//         }
//     }

//     changeHandlerInput = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         });
//     }

//     addFormHandler = (e) => {
//         e.preventDefault();

//         const {addForm} = this.props;
//         const {name, viewers} = this.state;

//         addForm({name, viewers});

//         this.setState({
//             name: '',
//             viewers: '',
//         });
//     }

//     render() {
//         const {name, viewers} = this.state;
//         const {changeHandlerInput, addFormHandler} = this;

//         return (
//             <div className='movies-add-form'>
//                 <h3>Yangi kino qo'shish</h3>
//                 <form className='add-form d-flex' onSubmit={addFormHandler}>
//                     <input type="text" className='form-control mx-1 new-post-label' placeholder='Qanday kino?' 
//                         onChange={changeHandlerInput} name='name' value={name}
//                     />
//                     <input type="number" className='form-control mx-1 new-post-label' placeholder="Nechi marotaba ko'rilgan?" 
//                         onChange={changeHandlerInput} name='viewers' value={viewers}
//                     />
//                     <button className='btn btn-outline-dark ms-1' type='submit'>
//                         Qo'shish
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }

// // const MoviesAddForm = () => {
// //     return (
// //         <div className='movies-add-form'>
// //             <h3>Yangi kino qo'shish</h3>
// //             <form className='add-form d-flex'>
// //                 <input type="text" className='form-control mx-1 new-post-label' placeholder='Qanday kino?' />
// //                 <input type="number" className='form-control mx-1 new-post-label' placeholder="Nechi marotaba ko'rilgan?" />
// //                 <button className='btn btn-outline-dark ms-1' type='submit'>
// //                     Qo'shish
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // }

export default MoviesAddForm;

// Boshqarib bo'ladigan formalardagi qiymatlar `state` larda saqlanadi
// Boshqarib bo'lmaydigan formalardagi qiymatlar `browser` da saqlanadi