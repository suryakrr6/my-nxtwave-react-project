// Write your code here
import {Component} from 'react'
import './index.css'

class ligher extends Component {
  state = {isActive: false}

  render() {
    const {isActive} = this.state
    const bgcolor = isActive ? 'bg-active' : 'bg-inactive'
    const headingcolor = isActive ? 'headingcolor1' : 'headingcolor2'
    return (
      <div className="outercontainer">
        <div className={`container ${bgcolor}`}>
          <h1 className={headingcolor}>Click to Change mode</h1>
          <button
            type="button"
            onClick={() =>
              this.setState(prevState => ({isActive: !prevState.isActive}))
            }
          >
            {isActive ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default ligher
