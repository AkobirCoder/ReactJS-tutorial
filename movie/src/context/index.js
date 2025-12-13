import {v4 as uuidv4} from "uuid";
import { createContext, useReducer } from "react"

const initialValue = {
    data: [],
    term: '',
    filter: 'all',
    errorMessage: '',
    isLoading: false,
}

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const {type, payload} = action; // type - method yoki function nomi, payload - function yoki method uchun argument

    switch (type) {
        case "GET_DATA":
            return {
                ...state, data: payload
            }

        case 'ON_DELETE':
            const deleteArray = state.data.filter((item) => {
                return item.id !== payload;
            });

            return {
                ...state, data: deleteArray
            }

        case 'ADD_FORM':
            const {name, viewers} = payload;

            const addFormArray = {
                name: name, 
                viewers: viewers, 
                id: uuidv4(), 
                favourite: false, 
                like: false
            };
        
            // if (!name || !viewers) {
            //     setErrorMessage("Iltimos kino nomi va uning ko'rishlar sonini kiriting");

            //     setTimeout(() => {
            //         setErrorMessage('');
            //     }, 5000);

            //     return;
            // }

            return {
                ...state, data: [...state.data, addFormArray]
            }

        case 'ON_TOGGLE_PROP':
            const {id, prop} = payload;

            const toggleArray = state.data.map((item) => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }

                return item;
            });

            return {
                ...state, data: toggleArray
            }

        case 'ON_TERM':
            return {
                ...state, term: payload
            }

        case 'ON_FILTER':
            return {
                ...state, filter: payload
            }

        default:
            return {state};
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
    );
}

export default Provider;