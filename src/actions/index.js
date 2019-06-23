
export const addToCart = (id) => ({
    type: 'ADD_PRODUCT_TO_CART',
    id: id
})

export const removeItem = id => ({
    type: 'REMOVE_ITEM_IN_CART',
    id: id
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const plusProduct = id => ({
    type: 'PLUS_PRODUCT',
    id: id
})

export const minusProduct = id =>({
    type:'MINUS_PRODUCT',
    id : id
})

export const plusNumber = () => ({
    type: 'PLUS'
})


export const minusNumber = () => ({
    type: 'MINUS'
})

export const plusNumberFive = () => ({
    type: 'PLUS_FIVE'
})