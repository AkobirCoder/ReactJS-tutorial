import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from "../movies-add-form/Movies-add-form";

import { Component } from "react";
import {v4 as uuidv4} from "uuid";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Empire of Osman", viewers: 988, favourite: false, like: false, id: 1, },
                { name: "Ertugrul", viewers: 789, favourite: false, like: false, id: 2, },
                { name: "Omar", viewers: 1091, favourite: false, like: false, id: 3, },
            ],


            // Search-paneldagi inputning qiymatini saqlab turuvchi state:

            term: '',
        }

        // this.maxId = 4;
    }

    onDelete = (id) => {

        // Mutable:

        // this.setState(({data}) => {
        //     const index = data.findIndex(item => item.id !== id);
        //     data.splice(index, 1);

        //     return {
        //         data,
        //     }
        // });


        // Immutable:

        this.setState(({data}) => {
            // const newArray = data.filter((item) => {
            //     return item.id !== id;
            // });

            // return {
            //     data: newArray,
            // }

            return {
                data: data.filter(item => item.id !== id),
            }
        });
    }

    addForm = (item) => {
        // const newItem = {name: item.name, viewers: item.viewers, id: this.maxId++}

        const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}

        if (!item.name || !item.viewers) {
            alert("Iltimos kino kiriting");

            return;
        }

        this.setState(({data}) => {
            // const newArray = [...data, {...item, id: uuidv4()}];

            // return {
            //     data: newArray,
            // }

            return {
                // data: [...data, {...item, id: uuidv4()}],

                data: [...data, newItem],
            }
        });
    }

    onToggleFavourite = (id) => {
        this.setState(({data}) => {
            // const newArray = data.map((item) => {
            //     if (item.id === id) {
            //         return {...item, favourite: !item.favourite}
            //     }

            //     return item;
            // });

            // return {
            //     data: newArray,
            // }

            // return {
            //     data: data.map((item) => {
            //         if (item.id === id) {
            //             return {...item, favourite: !item.favourite}
            //         } else {
            //             return item;
            //         }
            //     }),
            // }
        });


        // Ternary operator:

        // this.setState(({data}) => ({
        //     data: data.map((item) => item.id === id ? {...item, favourite: !item.favourite} : item),
        // }));
    }

    onToggleLike = (id) => {
        this.setState(({data}) => {
            // const newArray = data.map((item) => {
            //     if (item.id === id) {
            //         return {...item, like: !item.like}
            //     }

            //     return item;
            // });
        
            // return {
            //     data: newArray,
            // }

            // return {
            //     data: data.map((item) => {
            //         if (item.id === id) {
            //             return {...item, like: !item.like}
            //         } else {
            //             return item;
            //         }
            //     }),
            // }
        });


        // Ternary operator:

        // this.setState(({data}) => ({
        //     data: data.map((item) => item.id === id ? {...item, like: !item.like} : item),
        // }));
    }
    

    onToggleProp = (id, prop) => {
        // console.log(prop);

        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }

                return item;
            }),
        }));
    }
    
    searchHandler = (array, term) => {
        if (term.length === 0) {
            return array;
        }

        return array.filter((item) => {
            return item.name.toLowerCase().indexOf(term) > -1;
        });
    }

    updateTermHandler = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term} = this.state;
        // const {onDelete, addForm, onToggleFavourite, onToggleLike} = this;
        const {onDelete, addForm, onToggleProp, searchHandler, updateTermHandler} = this;
        const allMoviesCount = data.length;
        const favouriteMoviesCount = data.filter((item) => item.favourite).length;
        const visibleData = searchHandler(data, term);

        return (
            <div className="app font-monospace">
                <div className="content">
                    <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount} />
                    <div className="search-panel">
                        <SearchPanel updateTermHandler={updateTermHandler} />
                        <AppFilter />
                    </div>
                    {/* <MovieList data={data} onDelete={onDelete} onToggleFavourite={onToggleFavourite} onToggleLike={onToggleLike} /> */}
                    {/* <MovieList data={data} onDelete={onDelete} onToggleProp={onToggleProp} /> */}
                    <MovieList data={visibleData} onDelete={onDelete} onToggleProp={onToggleProp} />
                    <MoviesAddForm addForm={addForm} />
                </div>
            </div>
        );
    }
}

export default App;