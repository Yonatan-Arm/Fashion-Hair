import React from 'react'
//! TO CONNECT TO REDUX USE
import { connect} from 'react-redux'
import Hero from '../components/Hero'
import Specialities from '../components/Specialities'
import Projects from '../components/Projects'

export const _HomePage = () => {
  //! REDUX CONNECTION

  return (
  <div className='main-app flex column'>
    <Hero />
    <Specialities />
    <Projects />
  </div> 
  )
}

// !TO CONNECT TO REDUX

export const HomePage = connect(null)(_HomePage)


