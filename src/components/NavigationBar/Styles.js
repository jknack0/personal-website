import styled from 'styled-components'

export const NavigationBarContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 2px;
`

export const PageTitle = styled.h1`
  color: rgb(243, 167, 18);
  font-family: 'Lato', sans-serif;
  font-size: 3.5vw;
  text-shadow: 1px 1px rgb(121, 80, 5);
  margin: 0 4vw;
  @media (max-width: 768px) {
    font-size: 5vw;
    margin-right: 2vw;
  }
`

export const NavigationLinks = styled.ul`
  list-style: none;
`

export const Link = styled.li`
  color: rgb(243, 167, 18);
  font-family: 'Lato', sans-serif;
  display: inline-block;
  font-size: 1.3vw;
  padding: 7px 12px;
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: 10px;
  margin: 0 2vw;
  &:hover {
    border: 3px solid rgb(243, 167, 18);
    border-radius: 10px;
    -webkit-backface-visibility: hidden;
  }
  @media (max-width: 768px) {
    font-size: 3vw;
    margin:0;
    padding: 2px;
  }
`

export const InvertedLink = styled.li`
  color: rgb(39, 39, 39);
  background-color: rgb(243, 167, 18);
  font-family: 'Lato', sans-serif;
  display: inline-block;
  font-size: 1.3vw;
  padding: 5px 12px;
  margin: 0 2vw;
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: 10px;
  border: 3px solid transparent;
  &:hover {
    color: rgb(243, 167, 18);
    border: 3px solid rgb(243, 167, 18);
    background-color: transparent;
    border-radius: 10px;
    -webkit-backface-visibility: hidden;
  }
  @media (max-width: 768px) {
    font-size: 3vw;
    margin-right: 5px;
    padding: 2px;
  }
`
