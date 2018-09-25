var data = [
    {
        id: Math.random(),name: 'a 1',completed: false
    },
    {
        id: Math.random(),name: 'a 2',completed: true
    },
    {
        id: Math.random(),name: 'a 3',completed: false
    },
    {
        id: Math.random(),name: 'a 4',completed: true
    },
    {
        id: Math.random(),name: 'a 5',completed: true
    },
    {
        id: Math.random(),name: 'a 6',completed: false
    }
]
const todos = (state = data, action) => {
    
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => (
                todo.id  === action.id) ? {...todo, completed: !todo.completed} : todo)
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}


export default todos;