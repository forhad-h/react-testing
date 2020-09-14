import React from 'react';
import { connect } from 'react-redux'

import './App.scss';

import Header from './component/header'
import Headline from './component/headline'
import SharedButton from './component/button'
import ListItem from './component/listItem'
import { getPosts } from './actions';

const tempArr = [{
  fName: "John",
  lName: "Doe",
  email: "johndoe@gm.com",
  age: 23,
  onlineStatus: true
}]

function App(props) {


  const headerProps = {
    title: "Posts",
    desc: "Click to the button to see published posts."
  }

  const buttonProps = {
    buttonText: "Get Posts",
    emitEvent: props.getPosts
  }



  return <div className="App">
    <Header />
    <main>

      <section>
        <Headline {...headerProps} tempArr={tempArr} />
        <SharedButton {...buttonProps} />
      </section>

      <section className="post_list">
        {(props.posts && props.posts.length > 0) && props.posts.map((item, index) => {
          const ListItemProps = {
            title: item.title,
            desc: item.body
          }
          return <ListItem key={index} {...ListItemProps} />

        })}
      </section>

    </main>
  </div>
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
