import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from "../movies-add-form/Movies-add-form";

// import { Component } from "react";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

import './App.scss';

const App = () => {
    const [data, setData] = useState([
        { name: "Empire of Osman", viewers: 988, favourite: false, like: false, id: 1, },
        { name: "Ertugrul", viewers: 789, favourite: false, like: false, id: 2, },
        { name: "Omar", viewers: 1091, favourite: false, like: false, id: 3, },
    ]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [errorMessage, setErrorMessage] = useState('');

    // const onDelete = (id) => {
    //     setData((prevState) => {
    //         return prevState.filter((item) => {
    //             return item.id !== id;
    //         });
    //     });
    // }

    // const onDelete = (id) => {
    //     setData(data.filter((item) => item.id !== id));
    // }

    const onDelete = (id) => {
        const newArray = data.filter((item) => {
            return item.id !== id;
        });

        setData(newArray);
    }

    const addForm = (item) => {
        const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false};
        
        if (!item.name || !item.viewers) {
            setErrorMessage("Iltimos kino nomi va uning ko'rishlar sonini kiriting");

            setTimeout(() => {
                setErrorMessage('');
            }, 5000);

            return;
        }

        const newArray = [...data, newItem];

        setData(newArray);
    }

    const onToggleProp = (id, prop) => {
        const newArray = data.map((item) => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]};
            }

            return item;
        });

        setData(newArray);
    }

    const searchHandler = (array, term) => {
        if (term.length === 0) {
            return array;
        }

        return array.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1;
        });
    }

    const updateTermHandler = (term) => {
        setTerm(term);
    }
    
    const filterHandler = (array, filter) => {
        switch (filter) {
            case 'popular':
                return array.filter((item) => {
                    return item.like
                });
            case 'mostViewers':
                return array.filter((item) => {
                    return item.viewers > 800;
                });
            default:
                return array;
        }
    }

    const updateFilterHandler = (filter) => {
        setFilter(filter);
    }

    const allMoviesCount = data.length;
    const favouriteMoviesCount = data.filter((item) => item.favourite).length;
    const filteredByData = searchHandler(data, term);
    const visibleData = filterHandler(filteredByData, filter);
    const finalNoResultMessage = filteredByData.length === 0 && term ? "Kino topilmadi, iltimos to'g'ri nom kiriting" : "";

    return (
        <div className="app font-monospace" onClick={() => setErrorMessage('')}>
            <div className={`error-message ${errorMessage ? 'd-flex' : 'd-none'}`}>
                {errorMessage && 
                    <div className="fs-4 message" onClick={(e) => e.stopPropagation()}>
                        <i 
                            className="fa-solid fa-x fs-6 text-white" 
                            onClick={() => setErrorMessage('')}
                        ></i>
                        {errorMessage}
                    </div>
                }
            </div>
            <div className="content">
                <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
                <div className="search-panel">
                    <SearchPanel updateTermHandler={updateTermHandler} />
                    <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
                </div>
                {
                    finalNoResultMessage && filteredByData.length === 0
                    ? (<div className="fs-5 result-message">{finalNoResultMessage}</div>)
                    : <MovieList data={visibleData} onDelete={onDelete} onToggleProp={onToggleProp} />
                }
                <MoviesAddForm addForm={addForm} />
            </div>
        </div>
    );
}

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 { name: "Empire of Osman", viewers: 988, favourite: false, like: false, id: 1, },
//                 { name: "Ertugrul", viewers: 789, favourite: false, like: false, id: 2, },
//                 { name: "Omar", viewers: 1091, favourite: false, like: false, id: 3, },
//             ],

//             // Search-paneldagi inputning qiymatini saqlab turuvchi state:
//             term: '',

//             // App-filterdagi filter qiluvchi buttonlar uchun state:
//             filter: 'all',

//             errorMessage: '',
//         }

//         // this.maxId = 4;
//     }

//     onDelete = (id) => {

//         // Mutable:

//         // this.setState(({data}) => {
//         //     const index = data.findIndex(item => item.id !== id);
//         //     data.splice(index, 1);

//         //     return {
//         //         data,
//         //     }
//         // });


//         // Immutable:

//         this.setState(({data}) => {
//             // const newArray = data.filter((item) => {
//             //     return item.id !== id;
//             // });

//             // return {
//             //     data: newArray,
//             // }

//             return {
//                 data: data.filter(item => item.id !== id),
//             }
//         });
//     }

//     addForm = (item) => {
//         // const newItem = {name: item.name, viewers: item.viewers, id: this.maxId++}

//         const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}

//         if (!item.name || !item.viewers) {
//             // alert("Iltimos kino kiriting");

//             // return;

//             this.setState(() => {
//                 return {
//                     errorMessage: 'Iltimos kino kiriting',
//                 }
//             });

//             setTimeout(() => {
//                 this.setState(() => {
//                     return {
//                         errorMessage: '',
//                     }
//                 });
//             }, 6000);

//             return;
//         }

//         this.setState(({data}) => {
//             // const newArray = [...data, {...item, id: uuidv4()}];

//             // return {
//             //     data: newArray,
//             // }

//             return {
//                 // data: [...data, {...item, id: uuidv4()}],

//                 data: [...data, newItem],
//             }
//         });
//     }

//     onToggleFavourite = (id) => {
//         this.setState(({data}) => {
//             // const newArray = data.map((item) => {
//             //     if (item.id === id) {
//             //         return {...item, favourite: !item.favourite}
//             //     }

//             //     return item;
//             // });

//             // return {
//             //     data: newArray,
//             // }

//             // return {
//             //     data: data.map((item) => {
//             //         if (item.id === id) {
//             //             return {...item, favourite: !item.favourite}
//             //         } else {
//             //             return item;
//             //         }
//             //     }),
//             // }
//         });


//         // Ternary operator:

//         // this.setState(({data}) => ({
//         //     data: data.map((item) => item.id === id ? {...item, favourite: !item.favourite} : item),
//         // }));
//     }

//     onToggleLike = (id) => {
//         this.setState(({data}) => {
//             // const newArray = data.map((item) => {
//             //     if (item.id === id) {
//             //         return {...item, like: !item.like}
//             //     }

//             //     return item;
//             // });
        
//             // return {
//             //     data: newArray,
//             // }

//             // return {
//             //     data: data.map((item) => {
//             //         if (item.id === id) {
//             //             return {...item, like: !item.like}
//             //         } else {
//             //             return item;
//             //         }
//             //     }),
//             // }
//         });


//         // Ternary operator:

//         // this.setState(({data}) => ({
//         //     data: data.map((item) => item.id === id ? {...item, like: !item.like} : item),
//         // }));
//     }
    

//     onToggleProp = (id, prop) => {
//         // console.log(prop);

//         this.setState(({data}) => ({
//             data: data.map((item) => {
//                 if (item.id === id) {
//                     return {...item, [prop]: !item[prop]}
//                 }

//                 return item;
//             }),
//         }));
//     }
    
//     searchHandler = (array, term) => {
//         if (term.length === 0) {
//             return array;
//         }

//         return array.filter((item) => {
//             return item.name.toLowerCase().indexOf(term) > -1;
//         });
//     }

//     updateTermHandler = (term) => {
//         this.setState({term});
//     }

//     filterHandler = (array, filter) => {
//         switch (filter) {
//             case 'popular':
//                 return array.filter((item) => {
//                     return item.like;
//                 });
//             case 'mostViewers':
//                 return array.filter((item) => {
//                     return item.viewers > 800;
//                 });
//             default:
//                 return array;
//         }
//     }

//     updateFilterHandler = (filter) => {
//         this.setState({filter});
//     }

//     render() {
//         const {data, term, filter, errorMessage} = this.state;
//         // const {onDelete, addForm, onToggleFavourite, onToggleLike} = this;
//         const {onDelete, addForm, onToggleProp, searchHandler, updateTermHandler, filterHandler, updateFilterHandler} = this;
//         const allMoviesCount = data.length;
//         const favouriteMoviesCount = data.filter((item) => item.favourite).length;
//         const filteredByData = searchHandler(data, term);
//         const visibleData = filterHandler(filteredByData, filter);
//         const finalNoResultMessage = filteredByData.length === 0 && term ? "Kino mavjud emas, iltimos to'g'ri nom kiriting" : "";

//         return (
//             <div className="app font-monospace" onClick={() => this.setState({errorMessage: ''})}>
//                 <div className={`error-message ${errorMessage ? 'd-flex' : 'd-none'}`}>
//                     {errorMessage && 
//                         <div className="fs-4 message" onClick={(e) => e.stopPropagation()}>
//                             <i 
//                                 className="fa-solid fa-x fs-6 text-white" 
//                                 onClick={() => this.setState({errorMessage: ''})}
//                             ></i>
//                             {errorMessage}
//                         </div>
//                     }
//                 </div>
//                 <div className="content">
//                     <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
//                     <div className="search-panel">
//                         <SearchPanel updateTermHandler={updateTermHandler} />
//                         <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
//                     </div>
//                     {/* <MovieList data={data} onDelete={onDelete} onToggleFavourite={onToggleFavourite} onToggleLike={onToggleLike} /> */}
//                     {/* <MovieList data={data} onDelete={onDelete} onToggleProp={onToggleProp} /> */}
//                     {
//                         finalNoResultMessage && filteredByData.length === 0 
//                         ? (<div className="fs-5 result-message">{finalNoResultMessage}</div>) 
//                         : <MovieList data={visibleData} onDelete={onDelete} onToggleProp={onToggleProp} />
//                     }
                    
//                     <MoviesAddForm addForm={addForm} />
//                 </div>
//             </div>
//         );
//     }
// }

export default App;