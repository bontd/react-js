var redux = require('redux');
// var defaultState = {
//     data: ['Android', 'Ios', 'Os'],
//     isAdding: false
// }
// var reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'TOGGLE_IS_ADDING':
//             return {...state,isAdding: !state.isAdding}
//         case 'ADD_ITEM':
//             return {...state,data: [...state.data, action.item]}
//         case 'REMOVE_ITEM':
//             return {...state,data: state.data.filter((e, i) => i != action.index)}
//         default:
//         return state;
//     }
// }

var dataReducer =  (state = ['Android', 'IOS', 'OS'], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'REMOVE_ITEM':
            return state.filter((e, i) => i != action.index)
        default:
            return state;
    }
}

var isAddingReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
            return !state
        default:
            return state;
    }
}

var reducer = redux.combineReducers({
    data: dataReducer,
    isAdding: isAddingReducer
})

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension?window.devToolsExtension(): f => f
));
store.subscribe(() => {
    var str = store.getState();
    // document.getElementById('p-detail').innerHTML = JSON.stringify(str);
} );
store.dispatch({type: 'TOGGLE_IS_ADDING'});
store.dispatch({type: 'ADD_ITEM',item: 'BLACKBERRY'});
store.dispatch({type: 'REMOVE_ITEM',index: 1});
