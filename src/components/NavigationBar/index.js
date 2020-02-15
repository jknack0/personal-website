import React from 'react'
import { NavigationBarContainer,
         PageTitle,
         NavigationLinks,
         Link,
         InvertedLink
        } from './Styles'

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <PageTitle>Jonathon Knack</PageTitle>
      <NavigationLinks>
        <Link>Projects</Link>
        <Link>About Me</Link>
        <InvertedLink>Contact</InvertedLink>
      </NavigationLinks>
    </NavigationBarContainer>
  )
}

export default NavigationBar