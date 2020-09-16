import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import { findByTestAttr } from '../Utils'
import App from './App'
import { LandingPage, PortfolioPage, _404Page } from './page'

const renderWithRouter = (path = '') => mount(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)

describe('App Component', () => {

  it('should render without error', () => {
    const wrapper = renderWithRouter('/random')
    const appComponent = findByTestAttr(wrapper, 'appComponent')

    expect(appComponent).toHaveLength(1)

  })

  test('invalid path should redirect to 404', () => {
    const wrapper = renderWithRouter('/random')
    expect(wrapper.find(_404Page)).toHaveLength(1)
  })

  it('should render LandingPage', () => {
    const wrapper = renderWithRouter('/landing-page')
    expect(wrapper.find(LandingPage)).toHaveLength(1)
  })

  it('should render PortfolioPage', () => {
    const wrapper = renderWithRouter('/portfolio-page')
    expect(wrapper.find(PortfolioPage)).toHaveLength(1)
  })


})