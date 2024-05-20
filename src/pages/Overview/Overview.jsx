import React from 'react'
import "./style.css"
import Hero from '../../components/Hero/Hero'
import Content from '../../components/Content/Content'
import Main from '../../components/Main/Main'
import Certificate from '../../components/Certificate/Certificate'
import Program from '../../components/Program/Program'

const Overview = () => {
  return (
    <div className='container'>
        <Hero />
        <div className='spacer' />
        <Content />
        <div className='spacer' />
        <Main />
        <div className='spacer' />
        <Certificate />
        <div className="spacer" />
        <Program />
    </div>
  )
}

export default Overview