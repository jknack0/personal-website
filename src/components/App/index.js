import React from 'react';
import { PageContainer } from './Styles'
import NavigationBar from '../NavigationBar'
import SocialLinks from '../SocialLinks'

const App = () => {
  return (
    <PageContainer>
      <NavigationBar />
      <SocialLinks />
    </PageContainer>
  )
}

export default App