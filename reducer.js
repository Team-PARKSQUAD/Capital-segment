export const initialState = {
    value: {"something": "Some"}
};

export const reducer = (state,action) => {
    switch (action.type){
        case 'set_value':
            return{
                ...state, value: action.setValue
            };
        default:
            return state;    
    }
}