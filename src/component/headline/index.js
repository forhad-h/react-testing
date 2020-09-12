import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class Headline extends Component {



  render() {
    const { title, desc } = this.props

    if (!title) return null;

    return <main data-test="main">
      <h2 data-test="title">{title}</h2>
      <p data-test="desc">{desc}</p>
    </main>
  }
}

Headline.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineStatus: PropTypes.bool
  }))
}

export default Headline