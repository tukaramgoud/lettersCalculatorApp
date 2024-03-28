// Write your code here
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="main-heading">Calculate letters that you Entered</h1>
          <div className="input-container">
            <label htmlFor="inputEl" className="label-styling">
              Enter Your Phrase
            </label>
            <input
              type="text"
              id="inputEl"
              className="user-input"
              placeholder="Enter the Phrase"
            />
          </div>
          <div className="para-container">
            <p className="style-paraCount">No.of Letters : 0</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letter calculator"
            className="image-sizing"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
