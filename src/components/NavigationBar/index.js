import React from 'react'
import { NavigationBarContainer,
         PageTitle,
         NavigationLinks,
         Link } from './Styles'

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <PageTitle>Jonathon Knack</PageTitle>
      <NavigationLinks>
        <Link>Projects</Link>
        <Link>About Me</Link>
      </NavigationLinks>
    </NavigationBarContainer>
  )
}

export default NavigationBar