const initialState = {
    products: [],
    numAll: 0
}

const product = (state = initialState, action) => {
    // console.log(`state is `, state.product)
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            let findId = state.products.some(function (object) {
                return object.id === action.id;
            });

            if (findId) {
                state.products.forEach((key, val) => {
                    if (key.id === action.id) {
                        key.num += 1
                    }
                })
                return {
                    products: [...state.products],
                    numAll: state.numAll + 1
                }
            } else {
                return {
                    products: [...state.products,
                    {
                        id: action.id,
                        num: 1
                    }],
                    numAll: state.numAll + 1
                }
            }
        case 'CLEAR_CART':
            return state = {
                products: [],
                numAll: 0
            }

        case 'PLUS_PRODUCT':        
                    state.products.forEach((key, val) => {
                        if (key.id === action.id) {
                            key.num += 1
                        }
                    })
                    return {
                        products: [...state.products],
                        numAll: state.numAll + 1
                    }
        case 'MINUS_PRODUCT':
                state.products.forEach((val, index) => {             
                    if (val.id === action.id) {
                        if(val.num > 1){
                            console.log('-1')
                            val.num -= 1
                        }else{
                            console.log('remove')
                            state.products.splice(index,1)
                        }                  
                    }
                })
                return {
                    products: [...state.products],
                    numAll: state.numAll - 1
                }
        default:
            return state
    }
}

export default product




