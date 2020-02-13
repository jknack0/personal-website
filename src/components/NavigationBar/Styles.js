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
  margin-left: 50px;
  color: rgb(243, 167, 18);
  font-family: 'Lato', sans-serif;
  opacity: .9;
`

export const NavigationLinks = styled.ul`
  list-style: none;
`

export const Link = styled.li`
  color: rgb(243, 167, 18);
  font-family: 'Lato', sans-serif;
  display: inline-block;
  margin-right: 50px;
  font-size: 1.2em;
  padding: 10px 15px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 10px;
  &:hover {
    border: 2px solid rgb(243, 167, 18);
    border-radius: 10px;
    -webkit-backface-visibility: hidden;
  }
`
