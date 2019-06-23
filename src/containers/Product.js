import React from 'react'
import ProductList from '../data/product.json'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Edit from './Edit'



class Product extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            productData : []
        }
    }

    componentDidMount(){  
          this.setState({
            productData :ProductList
          })
        console.log(typeof ProductList)
    }



    _renderObject(){
        return Object.entries(this.state.productData).map(([key, value], i) => {
			return (
                        <tr key={key}>
                            <th scope="row">{i + 1}</th>
                            <td>{value.name}</td>
                            <td>{value.detail}</td>
                            <td>{value.price}</td>
                            <td>
                                <button className='btn btn-warning btn-sm'>Edit</button>
                                {/* <Link className="btn btn-warning btn-sm" to={`/products/edit/${value.token}`}>Edit</Link> */}
                            </td>
                            <td><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
			)
		})
    }

    render() {
        return (
            <div>
                <h4 className={`mt-5`}>Products</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Detail</th>
                            <th scope="col">Price</th>
                            <th scope="col">edit</th>
                            <th scope="col">delete</th>
                        </tr>
                    </thead>
                    <tbody> 
                         {this._renderObject()}
                    </tbody>
                </table>
               
            </div>
        )
    }
}

export default Product