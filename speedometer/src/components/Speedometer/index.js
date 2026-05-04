// Write your code here
import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="head1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="subhead">Speed is {count}mph</h1>

        <p className="secp">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="btncontainer">
          <button type="button" className="btn1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
