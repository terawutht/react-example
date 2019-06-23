import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({ productsInCart, numAll,onClearCart,onPlusProduct,onMinusProduct }) => {
    // console.log('productsInCart is ',productsInCart)

    let totalPrice = productsInCart.reduce((sum, product) => {
        return sum + parseFloat(product.price * product.num)
    }, 0)

    return <div className='row mt-4'>
        <div className='col-8'>
            <h5>ตะกร้าสินค้า </h5>
            <h6>มีจำนวน {numAll} ชิ้น ราคารวม {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท</h6>
            <ul>{productsInCart.map((product, i) => {
                return (
                <li key={i}>ชื่อสินค้า : {product.name}  ราคาต่อชิ้น {product.price} บาท จำนวน {product.num} ชิ้น
                <button className='ml-2 btn btn-sm btn-danger' onClick={()=>onMinusProduct(product.id)}>-</button>
                <button className='btn btn-sm btn-success' onClick={() => onPlusProduct(product.id)}>+</button></li>
            )
            })}</ul>
        </div><div className='col-4'>
            <button className="btn btn-sm btn-warning text-dark" onClick={onClearCart}>ล้างตะกร้าสินค้า</button>
        </div>
    </div>
}


// Cart.propTypes = {
//     products: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//     })),
// }

export default Cart