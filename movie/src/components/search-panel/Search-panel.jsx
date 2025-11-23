import { Component } from 'react';
import './Search-panel.css';

class SearchPanel extends Component {
    render() {
        return (
            <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish" />
        );
    }
}

// const SearchPanel = () => {
//     return (
//         <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish" />
//     );
// }

export default SearchPanel;