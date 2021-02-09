import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import './App.scss';

import Header from './component/header'
import Main from './Main'

import { LandingPage, PortfolioPage, _404Page } from './page'


class App extends Component {


  render() {
    return <div className="App" data-test="appComponent" >

      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/portfolio-page" component={PortfolioPage} />
        <Route component={_404Page} />
      </Switch>

    </div >
  }

}

export default withRouter(App);
