import React from 'react'
import { Container,Navbar,NavDropdown,Nav } from 'react-bootstrap'
import ShoppingCart from './ShoppingCart'
import Game1 from './Game1'
import Game2 from './Game2/index'
import Redux1 from './Redux1'
import Product from './Product'
import Hooks from './hooks/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

const AppRouter = () => (
  <Container>
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Link className="navbar-brand" to="/">React</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link to="/about/">About</Nav.Link>
              <Nav.Link to="/game1/">Game</Nav.Link> */}
              <Link className="nav-link active" to="/shopping-cart/">Shopping Cart</Link>
              <Link className="nav-link" to="/products/">Products</Link>
              <NavDropdown title="Other" id="basic-nav-dropdown">
              <Link className="nav-link" to="/game1/">Game 1</Link>
              <Link className="nav-link" to="/game2/">Game 2</Link>  
              <Link className="nav-link" to="/redux1/">Redux 1</Link>
              <Link className="nav-link" to="/hooks/">Hooks</Link>
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact component={Index} />
        <Route path="/shopping-cart/" component={ShoppingCart} />
        <Route path="/products/" component={Product} />
        <Route path="/game1/" component={Game1} />
        <Route path="/game2/" component={Game2} />
        <Route path="/redux1/" component={Redux1} />
        <Route path={`/hooks/`} component={Hooks} />
      </div>
    </Router>
  </Container>

)

export default AppRouter
