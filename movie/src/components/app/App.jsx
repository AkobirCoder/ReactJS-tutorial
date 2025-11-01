import AppInfo from "../app-info/App-info";
import SearchPanel from "../search-panel/Search-panel";
import AppFilter from "../app-filter/App-filter";

import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="content">
                <AppInfo />
                <div>
                    <SearchPanel />
                    <AppFilter />
                </div>
            </div>
        </div>
    );
}

export default App;