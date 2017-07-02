// Code CoordinatesButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
  constructor(props) {
    super()
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Coordinates</button>
    )
  }
}

export default DelayedButton
