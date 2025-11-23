import { Component } from 'react';
import './Search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    updateTermHandler = (e) => {
        const term = e.target.value.toLowerCase();

        this.setState({term});

        const {updateTermHandler} = this.props;

        updateTermHandler(term);
    }

    render() {
        const {term} = this.state;
        const {updateTermHandler} = this;

        return (
            <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish" onChange={updateTermHandler} value={term} />
        );
    }
}

// const SearchPanel = () => {
//     return (
//         <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish" />
//     );
// }

export default SearchPanel;