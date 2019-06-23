import React from 'react'
import { connect } from 'react-redux'
import { plusNumber, minusNumber, plusNumberFive } from '../actions/index'

class Game2 extends React.Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { number } = this.props
        if (number !== nextProps.number) {
            return true
        }
        return false
    }


    render() {

        //  console.log('props is ',this.props)

        return (
            <div>
                <h4 className={'mt-4'}>Redux Example</h4>
                <button onClick={this.props.onMinusNumber}>- 1</button> <span className="mr-2 ml-w">{this.props.number}</span>
                {/* <input type='number' defaultValue={this.state.number} value="1"/> */}
                <button onClick={this.props.onPlusNumber}>+ 2</button>
                <button onClick={this.props.onPlusNumberFive}>+ 5</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    // console.log('mapStateToProps :::: ',state)
    return {
        number: state.number
    }
}
//export default Game2

const mapDispatchToProps = dispatch => {
    return {
        onPlusNumber: () => dispatch(plusNumber()),
        onMinusNumber: () => dispatch(minusNumber()),
        onPlusNumberFive: () => dispatch(plusNumberFive())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Game2)