import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ButtonCol from '../components/ButtonCol'

class Game1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bt1: 0,
            bt2: 0,
            bt3: 0,
            bt4: 0,
            bt5: 0,
            bt6: 0,
            coin: 300,
            perCoin: 20,
            bonus: 0,
            scoreRowOne: "",
            btDisabled: false
        }
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.handleScore = this.handleScore.bind(this);

    }

    componentWillMount() {
        console.log('this is componentWillMount')
    }
    componentDidMount() {
        console.log('this is componentDidMount')
    }

    componentWillUnmount() {
        console.log('this is componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('this is componentWillUpdate')
    }

    random() {
        return Math.floor((Math.random() * 9) + 1)
    }

    getBonus = () => {
        let totalBonus = 0;

        if (this.state.bt1 !== 0) {
            if ((this.state.bt1 === this.state.bt2) && (this.state.bt2 === this.state.bt3)) {
                totalBonus += this.state.perCoin * 4
            } else if (this.state.bt1 === this.state.bt2 || this.state.bt2 === this.state.bt3) {

                totalBonus += this.state.perCoin * 2
            }

            if ((this.state.bt4 === this.state.bt5) && (this.state.bt5 === this.state.bt6)) {
                totalBonus += this.state.perCoin * 4
            } else if (this.state.bt4 === this.state.bt5 || this.state.bt5 === this.state.bt6) {

                totalBonus += this.state.perCoin * 2
            }
        }

        return totalBonus
    }


    handleScore() {

        if (this.state.coin <= 0) {
            return false
        }

        const totalBonus = this.getBonus()

        this.setState({
            coin: (this.state.coin - this.state.perCoin) + totalBonus,
            bt1: this.random(),
            bt2: this.random(),
            bt3: this.random(),
            bt4: this.random(),
            bt5: this.random(),
            bt6: this.random(),
        })

    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        let bouns = this.getBonus()
        let { bt1, bt2, bt3, bt4, bt5, bt6 } = this.state

        return (
            <div>
                <div className="status">Coin : {this.state.coin + bouns}</div>
                <div className="status">Number per cycle: {this.state.perCoin}</div>
                <div className="status">bonus is {bouns}</div>
                <Row className='mt-2'>
                    <Col md={4}>
                        <Row>
                            <Col md={4}><ButtonCol name={`${bt1 !== 0 ? bt1 : ' '}`} isActive={(bt1 !== 0) && (bt1 === bt2) ? true : false} /></Col>
                            <Col md={4}><ButtonCol name={`${bt2 !== 0 ? bt2 : ' '}`} isActive={(bt2 !== 0) && ((bt1 === bt2) || (bt2 === bt3)) ? true : false} /></Col>
                            <Col md={4}><ButtonCol name={`${bt3 !== 0 ? bt3 : ' '}`} isActive={(bt3 !== 0) && (bt2 === bt3) ? true : false} /></Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <h5 className='ml-2'>{bt1 !== 0 ? bt1 === bt2 && bt2 === bt3 ? 'Jackpot':'':''}</h5>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col md={4}>
                        <Row>
                            <Col md={4}><ButtonCol name={`${bt4 !== 0 ? bt4 : ' '}`} isActive={(bt4 !== 0) && (bt4 === bt5) ? true : false} /></Col>
                            <Col md={4}><ButtonCol name={`${bt5 !== 0 ? bt5 : ' '}`} isActive={(bt5 !== 0) && ((bt4 === bt5) || (bt5 === bt6)) ? true : false} /></Col>
                            <Col md={4}><ButtonCol name={`${bt6 !== 0 ? bt6 : ' '}`} isActive={(bt6 !== 0) && (bt5 === bt6) ? true : false} /></Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <h5 className='ml-2'>{bt4 !== 0 ? bt4 === bt5 && bt5 === bt6 ? 'Jackpot':'':''}</h5>
                    </Col>
                </Row>
                <Row className="mt-2 mb-2 ml-5">
                    <button type="button" className={`btn btn-sm btn-primary`} onClick={this.handleScore} disabled={`${(this.state.btDisabled) ? 'disabled' : ''}`}>หมุน</button>
                </Row>

            </div>
        )
    }
}


export default Game1