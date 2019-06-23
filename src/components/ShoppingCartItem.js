import React from 'react'
import { Card, Button } from 'react-bootstrap'
import imgDefault from '../assets/img/no-image.png';

const ShoppingCartItem = ({total,name,detail,onClick,price}) => {

    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgDefault}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{detail}</Card.Text>
            <Card.Text>Price : {price}</Card.Text>
            <Card.Text> Total : {total}</Card.Text>
            <Button variant="primary" onClick={onClick}>add to cart</Button>
        </Card.Body>
    </Card>

}

export default ShoppingCartItem

