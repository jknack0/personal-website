import styled from 'styled-components'
import BackgroundImage from '../../images/laptop-city.jpg'

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: 100vw 100vh;
  @media (max-width: 768px) {
    background-color: rgb(39, 39, 39);
    background-repeat: no-repeat;
    opacity: .8;
  }
`