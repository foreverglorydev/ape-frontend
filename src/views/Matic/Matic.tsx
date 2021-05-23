import React from 'react'
import { BaseLayout, Card, Heading, Image } from '@apeswapfinance/uikit'
import styled from 'styled-components'
import { TranslateString } from 'utils/translateTextHelpers'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import Page from 'components/layout/Page'
import Iframe from 'react-iframe'
import Divider from './components/Divider'
import Description from './components/Description/Description'
import Pools from './components/Pools/Pools'

const StyledIframe = styled(Iframe)`
  width: 100%;
  height: 860px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      height: 1200px;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      height: 860px;
    }
  }
`
const StyledHeroSection = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const MarginContainer = styled.div`
  margin: 53px 30px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin: 32px 0px;
  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const PaddedCard = styled(Card)`
  padding: 26px;
`

const StyledUL = styled.ul`
  margin-bottom: 20px !important;
`

const StyledLI = styled.li`
  font-size: 18px;
  font-family: 'Poppins';
`


const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

const StyledImage = styled(Image)`
  padding-top: 250px;
  margin-left: auto;
  margin-right: auto;
`

const Zone = () => {
  const { account } = useWallet()

  return (
    <>
    
    <Description />
    <Page>
      <StyledHeroSection>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px">
            {TranslateString(282, 'Banana fiesta')}
          </Heading>
          <ul>
            <li>{TranslateString(580, 'Stake BANANA to earn new tokens.')}</li>
            <li>{TranslateString(404, 'You can unstake at any time.')}</li>
            <li>{TranslateString(406, 'Rewards are calculated per block.')}</li>
          </ul>
        </div>
        <div>
          <Image src="/images/pool-ape.png" alt="ApeSwap illustration" width={470} height={439} responsive />
        </div>
      </Hero>
      </StyledHeroSection>
      <Divider />
      <Pools />
      <StyledIframe url="http://localhost:3000/?embed=1#/swap?outputCurrency=0xa4f93159ce0a4b533b443c74b89967c60a5969f8" />

    </ Page>
    </>
  )
}
export default Zone
