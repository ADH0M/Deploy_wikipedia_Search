export const initialState = {
    name:"cart",
    value:0 , 
    err:null
} ;

const reducer = (state ,action)=>{
    switch(action){
        case 'increase':
            return {...state ,value: state.value + 1} ;
        case 'decrease' :
            return {...state ,value: state.value - 1} ;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

export default reducer