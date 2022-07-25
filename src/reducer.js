const reducer = (state, action) => {
   switch (action.type) {
    case 'SUB':
        if(action.subject === 'cs') {
            state = state.cs;
        }
        if(action.subject === 'chem') {
            state =  state.chem;
        }
        if(action.subject === 'math') {
            state = state.math;
        }
          return state;

    default:
        return state;
   }
}

export default reducer
