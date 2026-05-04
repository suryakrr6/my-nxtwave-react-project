// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isActive: false,
  }

  render() {
    const {isActive} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button
          onClick={() =>
            this.setState(prevState => ({isActive: !prevState.isActive}))
          }
          type="button"
        >
          {isActive ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
