import React, { Component } from 'react'

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

export default Headline