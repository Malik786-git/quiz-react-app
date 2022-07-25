import { createContext, useContext, useReducer} from 'react'
import {data} from './data'
import reducer from './reducer';

const myContext = createContext();


const AppProvider = ({children})=> {
   
    const [state, dispatch] = useReducer(reducer, data);
    // const nextQuestion = ()=> {
    //     console.log('ggggg');
    //     dispatch({type: 'NEXT'});
    // }
    const selectSubject = (sub)=> {
        // console.log(sub);
        dispatch({type: 'SUB', subject: sub});
    }

    return (
        <myContext.Provider
           value={{
                questions: state,
                selectSubject,
           }}
        >
            {children}
        </myContext.Provider>
    );
}

const UseContext = ()=>{
    return useContext(myContext);
}

export {AppProvider, myContext};
export default UseContext;