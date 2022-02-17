import styled, { keyframes } from 'styled-components'
import { FadeIn } from 'views/NewHomepage/styles'

export const NewsCard = styled.div<{ image: string; index: number; listLength: number }>`
  height: 348px;
  min-width: 266px;
  max-width: 266px;
  opacity: 1;
  flex-shrink: 1;
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  transition: ease 1000ms;
`

export const NewsWrapper = styled.div`
  display: flex;
  height: 500px;
  align-items: center;
  overflow: hidden;
  max-width: 1412px;
  width: 95vw;
  justify-content: center;
  padding-bottom: 50px;
`

export const Bubble = styled.div<{ isActive?: boolean }>`
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%)' : 'rgba(66, 66, 66, .2)'};
  height: 14px;
  width: 14px;
  border-radius: 50px;
  margin: 0px 2.5px 0px 2.5px;
  cursor: pointer;
`