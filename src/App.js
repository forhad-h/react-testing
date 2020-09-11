import React from 'react';

import './App.scss';

import Header from './component/header'
import Headline from './component/headline'


function App() {
  return <div className="App">
    <Header />
    <section>
      <Headline title="Posts" desc="Click to the button to see published posts." />
    </section>
  </div>
}

export default App;
