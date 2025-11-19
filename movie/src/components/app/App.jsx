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

        // Mutable:

        this.setState(({data}) => {
            const index = data.findIndex(item => item.id !== id);
            data.splice(index, 1);

            return {
                data,
            }
        });


        // Immutable:
    }

    render() {
        const {data} = this.state;
        const {onDelete} = this;

        return (
            <div className="app font-monospace">
                <div className="content">
                    <AppInfo />
                    <div className="search-panel">
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList data={data} onDelete={onDelete} />
                    <MoviesAddForm />
                </div>
            </div>
        );
    }
}

export default App;