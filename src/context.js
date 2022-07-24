import { createContext, useReducer} from 'react'
import {data} from './data'
import reducer from './reducer';

const myContext = createContext(data);


const AppProvider = ({children})=> {
   
    const [state, dispatch] = useReducer(reducer, data);
    const nextQuestion = (action)=> {
        dispatch('NEXT');
    }

    return (
        <myContext.Provider
           value={{
                question: state,
           }}
        >
            {children}
        </myContext.Provider>
    );
}


export {AppProvider, myContext};
