// import { Component } from 'react';
import { useContext, useState } from 'react';
import './Search-panel.scss';
import { Context } from '../../context';

const SearchPanel = (props) => {
    const [term, setTerm] = useState('');

    const {dispatch} = useContext(Context);

    const updateTermHandler = (event) => {
        const term = event.target.value.toLowerCase();

        setTerm(term);

        // props.updateTermHandler(term);

        dispatch({type: 'ON_TERM', payload: term});
    }

    return (
        <input 
            type="text" 
            className="form-control search-input" 
            placeholder="Kinolarni qidirish" 
            onChange={updateTermHandler} 
            value={term} 
        />
    );
}

// class SearchPanel extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             term: '',
//         }
//     }

//     updateTermHandler = (e) => {
//         const term = e.target.value.toLowerCase();

//         this.setState({term});

//         const {updateTermHandler} = this.props;

//         updateTermHandler(term);
//     }

//     render() {
//         const {term} = this.state;
//         const {updateTermHandler} = this;

//         return (
//             <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish" onChange={updateTermHandler} value={term} />
//         );
//     }
// }

// const SearchPanel = () => {
//     return (
//         <input type="text" className="form-control search-input" placeholder="Kinolarni qidirish" />
//     );
// }

export default SearchPanel;