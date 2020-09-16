import React, { Component } from 'react'
import { connect } from 'react-redux'

import Headline from './component/headline'
import SharedButton from './component/button'
import ListItem from './component/listItem'
import { getPosts } from './actions';

class Main extends Component {


  state = {
    hideButton: false
  }


  getPosts = () => {
    this.props.getPosts()
    this.updateState()
  }

  updateState() {
    this.setState({
      hideButton: true
    })
  }

  simplyReturn(num) {
    return num + 1
  }

  render() {

    const headerProps = {
      title: "Posts",
      desc: "Click to the button to see published posts."
    }

    const buttonProps = {
      buttonText: "Get Posts",
      emitEvent: this.getPosts
    }

    return <main data-test="mainComponent">

      <section>
        <Headline {...headerProps} />
        {!this.state.hideButton &&
          <SharedButton {...buttonProps} />}
      </section>

      <section className="post_list" data-test="postList">
        {(this.props.posts && this.props.posts.length > 0) && this.props.posts.map((item, index) => {
          const ListItemProps = {
            title: item.title,
            desc: item.body
          }
          return <ListItem key={index} {...ListItemProps} />

        })}
      </section>

    </main>
  }

}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = {
  getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
