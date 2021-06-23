import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Heading, Card, Text, Button, Flex, CardRibbon, ArrowDropDownIcon, Spinner } from '@apeswapfinance/uikit'
import useFetchSeasonTrading from 'state/strapi/useFetchSeasonTrading'
import useFetchSeasonInfo from 'state/strapi/useFetchSeasonInfo'
import { useParams } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import TradingTable from './Trading'
import PersonalTrading from './PersonalTrading'
import ParticipatingTokens from './ParticipatingTokens'
import HeroCard from './HeroCard'

const Trading = () => {
  // const {
  //   season = '0',
  //   pair = '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
  // }: { season?: string; pair?: string } = useParams()

  const StyledFlex = styled(Flex)`
    width: 100%;
    margin-bottom: 10px;
    ${({ theme }) => theme.mediaQueries.md} {
      margin-left: 20px;
      max-width: 553px;
      margin-bottom: 0px;
    }
  `

  const StyledFlexContainer = styled(Flex)`
    flex-direction: column-reverse;

    ${({ theme }) => theme.mediaQueries.md} {
      flex-direction: row;
    }
  `

  const StyledHeading = styled(Text)`
    font-weight: bold;
    display: none;

    ${({ theme }) => theme.mediaQueries.md} {
      display: flex;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 20px;
    }
  `
  const LoadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    ${({ theme }) => theme.mediaQueries.lg} {
      margin-bottom: 60px;
    }
  `
  const { account } = useWallet()
  const { seasons, loading } = useFetchSeasonTrading()
  const infoSeason = seasons[0] ?? { season: 0, endTimestamp: 0, pair: '' }
  const { allInfo } = useFetchSeasonInfo({ season: infoSeason?.season, pair: infoSeason?.pair, address: account })

  return (
    <Page width="1130px">
      {loading ? (
        <LoadingContainer className="something">
          <Spinner />
        </LoadingContainer>
      ) : (
        <>
          <HeroCard season={infoSeason?.season ?? 0} endTimestamp={infoSeason?.endTimestamp ?? 0} />
          <StyledHeading color="text" fontFamily="poppins" fontSize="24px">
            Season Results
          </StyledHeading>
          <StyledFlexContainer>
            <TradingTable stub={allInfo?.trading ?? []} />
            <StyledFlex flexDirection="column">
              <ParticipatingTokens {...allInfo.season} />
              <PersonalTrading {...allInfo.individual} />
            </StyledFlex>
          </StyledFlexContainer>
        </>
      )}
    </Page>
  )
}

export default Trading
