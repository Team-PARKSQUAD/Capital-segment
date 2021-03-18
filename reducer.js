export const initialState = {
    list: [
        {name:"Fee",amount:1000}
    ]
}

export const reducer = (state,action) => {
    switch (action.type){
        case 'set_value':
            return{
                ...state, list: action.data
            };
        default:
            return state;    
    }
}