
const initialState = {
    status:'ON'
}

export default (state =  initialState , action) => {
 // console.log('action type is',action)
    console.log('reducers::state::',state)
    switch (action.type) {
        case 'CHANGE_USERNAME':
            //   state.username = action.newUsername
            if(action.status === 'ON'){
                return 'OFF'
            }else{
                return 'ON'
            }
          
           // break
        default: return state.status
    }
}

