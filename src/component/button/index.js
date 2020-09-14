import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class SharedButton extends Component {

  submitEvent = async () => {
    if (this.props.emitEvent) await this.props.emitEvent();
  }

  render() {
    const { buttonText } = this.props
    return <button className="shared_button" data-test="buttonComponent" onClick={this.submitEvent}>
      {buttonText}
    </button>
  }

}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

export default SharedButton