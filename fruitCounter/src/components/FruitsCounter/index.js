// Write your code here
import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0, count1: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onIncrement2 = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  render() {
    const {count} = this.state
    const {count1} = this.state
    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <h1>
            Bob ate <span>{count}</span> mangoes <span>{count1}</span> bananas
          </h1>
          <div className="pic">
            <div className="picin">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.onIncrement}>
                Eat Mango
              </button>
            </div>
            <div className="picin">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.onIncrement2}>
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
