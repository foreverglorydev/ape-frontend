import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Heading, Card, Text, Button, Flex, CardRibbon, ArrowDropDownIcon, Spinner } from '@apeswapfinance/uikit'
import useFetchSeasonTrading from 'state/strapi/useFetchSeasonTrading'
import useFetchSeasonInfo from 'state/strapi/useFetchSeasonInfo'
import { useWeb3React } from '@web3-react/core'
import TradingTable from './Trading'
import PersonalTrading from './PersonalTrading'
import ParticipatingTokens from './ParticipatingTokens'
import HeroCard from './HeroCard'

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

const Trading = () => {
  const { account } = useWeb3React()
  const { seasons, loading } = useFetchSeasonTrading()
  const infoSeason = seasons[0]
  const { allInfo, loadingAllInfo } = useFetchSeasonInfo({
    season: infoSeason?.season,
    pair: infoSeason?.pair,
    address: account,
  })
  return (
    <Page width="1130px">
      {loading || loadingAllInfo || !infoSeason ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <>
          <HeroCard season={infoSeason.season} endTimestamp={infoSeason.endTimestamp} />
          <StyledHeading color="text" fontFamily="poppins" fontSize="24px">
            Season Results
          </StyledHeading>
          <StyledFlexContainer>
            <TradingTable tradingStats={allInfo.trading} />
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
