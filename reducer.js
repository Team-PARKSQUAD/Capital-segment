export const initialState = {
    list: [
        // Hardcoded Starting balance
        {name:"Available", amount:50000}
    ]
}

export const reducer = (state,action) => {
    switch (action.type){
        case 'set_value':
            state.list.push(action.data)
            state.list.map(ls => console.log(ls))
            return{
                ...state
            };
        default:
            return state;    
    }
}