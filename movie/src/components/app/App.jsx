import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";
import MovieList from "../movie-list/Movie-list";
import MoviesAddForm from "../movies-add-form/Movies-add-form";

import { Component } from "react";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Empire of Osman", viewers: 988, favourite: false, id: 1, },
                { name: "Ertugrul", viewers: 789, favourite: false, id: 2, },
                { name: "Omar", viewers: 1091, favourite: true, id: 3, },
            ],
        }
    }

    onDelete = (id) => {
        this.setState(({data}) => {

            // Mutable:

            // const index = data.findIndex(c => c.id !== id);

            // data.splice(index, 1);


            // Immutable:

            // const newArr = data.filter((item) => {
            //     return item.id !== id;
            // });

            // return {
            //     data: newArr,
            // }

            return {
                data: data.filter((item) => item.id !== id),
            }
        });
    }

    addForm = (item) => {
        this.setState(({data}) => ({
            data: [...data, item],
        }));
    }

    render() {
        const {data} = this.state;
        const {onDelete, addForm} = this;

        return (
            <div className="app font-monospace">
                <div className="content">
                    <AppInfo />
                    <div className="search-panel">
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList data={data} onDelete={onDelete} />
                    <MoviesAddForm addForm={addForm} />
                </div>
            </div>
        );
    }

    
}

export default App;

