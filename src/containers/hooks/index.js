import React from 'react';
import UseState from './UseState'
import UseEffect from './UseEffect'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Hooks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {     
        return (
            <div className={'mt-4'}>
                <h5>Hooks Example</h5>
                <Router>
                    <Link to="/hook/useState/">useState</Link><br/>
                    <Link to="/hook/use-effect/">useEffect</Link>
                    <Route path="/hook/useState/" component={UseState} />
                    <Route path="/hook/use-effect/" component={UseEffect} />
                    
                </Router>             
            </div>
        )
    }
}

export default Hooks