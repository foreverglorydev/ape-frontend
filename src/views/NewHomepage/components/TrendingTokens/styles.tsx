import { Text } from '@apeswapfinance/uikit'
import styled from 'styled-components'
import { FadeIn } from 'views/NewHomepage/styles'

export const TrendingTokensWrapper = styled.div`
  position: relative;
  max-width: 1412px;
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  z-index: 1;
  padding: 15px 20px 0px 20px;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 15px 100px 0px 100px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    padding: 0px 40px 0px 220px;
  }
`

export const TokenContainer = styled.div`
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
  height: 83px;
  animation: ${FadeIn} 0.5s linear;
`

export const Title = styled(Text)`
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    left: 40px;
    width: 170px;
    position: absolute;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`