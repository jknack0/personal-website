import React from 'react'
import LinkedIn from '../../images/linkedin-logo.png'
import GitHub from '../../images/github-logo.png'
import Resume from '../../images/resume-logo.png'
import { SocialContainer, SocialLink } from './Styles'

const SocialLinks = () => {
  return (
    <SocialContainer>
      <SocialLink src={Resume} />
      <a href='https://www.linkedin.com/in/jonathonknack/'><SocialLink src={LinkedIn} /></a>
      <a href='https://www.github.com/jknack0'><SocialLink src={GitHub} /></a>
    </SocialContainer>
  )
}

export default SocialLinks