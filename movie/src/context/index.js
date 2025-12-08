import { createContext, useReducer } from "react"

const intialValue = {
    data: [],
    term: '',
    filter: 'all',
    errorMessage: '',
}

export const Context = createContext();

const reducer = (state = intialValue, action) => {
    const {type, payload} = action;

    switch (type) { // davom ettirish kerak...
        case 'ON_DELETE':
            const deleteArray = state.data.filter((item) => {
                return item.id !== payload;
            });
            return {...state, data: deleteArray};
    
        default:
            return {state};
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, intialValue);

    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}

export default Provider;