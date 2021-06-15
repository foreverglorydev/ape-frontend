import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Heading, Card, Text, Button, Flex, CardRibbon, ArrowDropDownIcon } from '@apeswapfinance/uikit'
import { useParams } from 'react-router-dom'
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

  return (
    <Page width="1130px">
      <HeroCard />
      {/* <Heading as="h2" size="xl" mb="24px" mt="24px" color="secondary">
        Season: {season}
      </Heading>
      <Heading as="h2" size="xl" mb="24px" mt="24px" color="secondary">
        Pair: BANANA/BNB
      </Heading> */}
      <StyledHeading color="text" fontFamily="poppins" fontSize="24px">
        Season Results
      </StyledHeading>
      <StyledFlexContainer>
        <TradingTable />
        <StyledFlex flexDirection="column">
          <ParticipatingTokens />
          <PersonalTrading />
        </StyledFlex>
      </StyledFlexContainer>
    </Page>
  )
}

export default Trading
