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