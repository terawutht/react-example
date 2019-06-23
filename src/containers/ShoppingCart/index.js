import React from 'react'
import ShoppingCartItem from '../../components/ShoppingCartItem'
import Cart from './Cart'
import ProductsData from '../../data/product.json'
import { CardDeck } from 'react-bootstrap'
import { addToCart, clearCart,plusProduct,minusProduct } from '../../actions/index'
import { connect } from 'react-redux'
import defalutImg from '../../assets/img/no-image.png'

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {

        let { numAll, productsInCart, onClearCart, onAddToCart,onPlusProduct,onMinusProduct } = this.props

        return (
            <div>
                <h4 className="mt-4 mb-2">Smartphone</h4>
                <CardDeck>
                    {ProductsData.map((product, i) => {
                        return <ShoppingCartItem key={i}
                            name={product.name}
                            brand={product.brand}
                            nameImg={product.img}
                            detail={product.detail}
                            total={product.total}
                            price={product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            onClick={() => onAddToCart(product.id)}
                        />
                    })}</CardDeck>
                {/* <button onClick={() => onRemoveItem(1)}>test</button> */}
                <Cart productsInCart={productsInCart} numAll={numAll} onClearCart={onClearCart} onPlusProduct={onPlusProduct} onMinusProduct={onMinusProduct}/>
            </div>

        )
    }

}

const mapStateToProps = state => {
    console.log(`mapStateToProps is `, state)

    let allProduct = state.product.products.map(e1 => {
        let resultFind = ProductsData.find(e2 => {
            return e2.id === e1.id
        })
        return {
            id: e1.id,
            name: resultFind.name,
            num: e1.num,
            price: resultFind.price
        }
    })

    return {
        productsInCart: allProduct,
        numAll: state.product.numAll
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: id => dispatch(addToCart(id)),
        onClearCart: () => dispatch(clearCart()),
        onPlusProduct:(id) => dispatch(plusProduct(id)),
        onMinusProduct: id => dispatch(minusProduct(id))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ShoppingCart)