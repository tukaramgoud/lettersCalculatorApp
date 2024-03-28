// Write your code here
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeOfInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label htmlFor="inputEl" className="label-styling">
              Enter the phrase
            </label>
            <input
              type="text"
              id="inputEl"
              className="user-input"
              placeholder="Enter the phrase"
              onChange={this.changeOfInput}
            />
          </div>
          <div className="para-container">
            <p className="style-paraCount">No.of letters: {count}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-sizing"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
