// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  changeFirstNameVisibility = () => {
    const {isFirstNameVisible} = this.state

    this.setState({isFirstNameVisible: !isFirstNameVisible})
  }

  changeLastNameVisibility = () => {
    const {isLastNameVisible} = this.state

    this.setState({isLastNameVisible: !isLastNameVisible})
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="show-hide-container">
        <div className="show-hide-card">
          <h1>Show/Hide</h1>
          <div className="show-hide-items-container">
            <div className="show-hide-item-container">
              <button onClick={this.changeFirstNameVisibility} type="button">
                Show/Hide Firstname
              </button>
              {isFirstNameVisible && (
                <div className="show-hide-app-output-cont">
                  <p>Joe</p>
                </div>
              )}
            </div>

            <div className="show-hide-item-container">
              <button onClick={this.changeLastNameVisibility} type="button">
                Show/Hide Lastname
              </button>
              {isLastNameVisible && (
                <div className="show-hide-app-output-cont">
                  <p>Jonas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
