import { Component } from 'react';
import './App-filter.scss'

const AppFilter = ({updateFilterHandler, filter}) => {
    const btnsArray = [
        {name: 'all', label: "Barcha kinolar"},
        {name: 'popular', label: "Mashhur kinolar"},
        {name: 'mostViewers', label: "Eng ko'p ko'rilgan kinolar"},
    ];

    return (
        <div className='btn-group'>
            {
                btnsArray.map((btn) => {
                    return (
                        <button 
                            className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
                            type='button'
                            key={btn.name}
                            onClick={() => updateFilterHandler(btn.name)}
                        >
                            {btn.label}
                        </button>
                    );
                })
            }
        </div>
    );
}

// class AppFilter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     render() {
//         const btnsArray = [
//             {name: 'all', label: "Barcha kinolar"},
//             {name: 'popular', label: "Mashhur kinolar"},
//             {name: 'mostViewers', label: "Eng ko'p ko'rilgan kinolar"},
//         ];

//         const {updateFilterHandler, filter} = this.props;

//         return (
//             <div className="btn-group">
//                 {
//                     btnsArray.map((btn) => {
//                         return (
//                             <button 
//                                 className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
//                                 type='button' 
//                                 key={btn.name} 
//                                 onClick={() => updateFilterHandler(btn.name)}
//                             >
//                                 {btn.label}
//                             </button>
//                         );
//                     })
//                 }
//             </div>
//         );
//     }
// }

// const AppFilter = ({updateFilterHandler, filter}) => {
//     const btnsArray = [
//         {name: 'all', label: "Barcha kinolar"},
//         {name: 'popular', label: "Mashhur kinolar"},
//         {name: 'mostViewers', label: "Eng ko'p ko'rilgan kinolar"},
//     ];

//     return (
//         <div className="btn-group">
//             {
//                 btnsArray.map((btn) => {
//                     return (
//                         <button 
//                             className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
//                             type='button' 
//                             key={btn.name} 
//                             onClick={() => updateFilterHandler(btn.name)}
//                         >
//                             {btn.label}
//                         </button>
//                     );
//                 })
//             }

//             {/* <button className="btn btn-dark" type="button">
//                 Barcha kinolar
//             </button>
//             <button className="btn btn-outline-dark" type="button">
//                 Mashhur kinolar
//             </button>
//             <button className="btn btn-outline-dark" type="button">
//                 Eng ko'p ko'rilgan kinolar
//             </button> */}
//         </div>
//     );
// }

export default AppFilter;