
const number = (state = 0, action) => {
    switch (action.type) {
        case 'PLUS':
            return state + 1
        case 'MINUS':
            return state === 0 ? state : state - 1
        case 'PLUS_FIVE':
            return state + 5
        default: return state
    }
}


export default number