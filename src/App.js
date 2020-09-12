import React from 'react';

import './App.scss';

import Header from './component/header'
import Headline from './component/headline'

const tempArr = [{
  fName: "John",
  lName: "Doe",
  email: "johndoe@gm.com",
  age: 23,
  onlineStatus: true
}]

function App() {
  return <div className="App">
    <Header />
    <section>
      <Headline title="Posts" desc="Click to the button to see published posts." tempArr={tempArr} />
    </section>
  </div>
}

export default App;
