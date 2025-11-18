import { Component } from 'react';
import './Movies-add-form.css';

class MoviesAddForm extends Component {
    

    render() {
        

        return (
            <div className='movies-add-form'>
                <h3>Yangi kino qo'shish</h3>
                <form className='add-form d-flex'>
                    <input type="text" className='form-control mx-1 new-post-label' placeholder='Qanday kino?' 
                        
                    />
                    <input type="number" className='form-control mx-1 new-post-label' placeholder="Nechi marotaba ko'rilgan?" 
                        
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