// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {checked: false}

  buttonText = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  getButtonText = () => {
    const {checked} = this.state

    return checked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>
          <button onClick={this.buttonText} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
