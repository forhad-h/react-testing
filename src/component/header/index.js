import React from 'react'
import './styles.scss'
import Logo from '../../assets/graphics/logo.png'
import { NavLink, Link } from 'react-router-dom'

const Header = props => {
  return (<header data-test="headerComponent">
    <div className="wrap">
      <div className="logoWrap">
        <Link to="/"><img data-test="logoImg" src={Logo} alt="Logo" /></Link>
      </div>
      <ul className="menu">
        <li><NavLink to="/landing-page" >Landing Page</NavLink></li>
        <li><NavLink to="/portfolio-page" >Portfolio Page</NavLink></li>
      </ul>
    </div>
  </header>)
}

export default Header