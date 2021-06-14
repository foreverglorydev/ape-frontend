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
    width: 553px;
    margin-left: 20px;
  `

  return (
    <Page>
      <HeroCard />
      {/* <Heading as="h2" size="xl" mb="24px" mt="24px" color="secondary">
        Season: {season}
      </Heading>
      <Heading as="h2" size="xl" mb="24px" mt="24px" color="secondary">
        Pair: BANANA/BNB
      </Heading> */}
      <Heading as="h4" size="lg" mb="24px" mt="24px" color="secondary">
        Season Results
      </Heading>
      <Flex>
        <TradingTable />
        <StyledFlex flexDirection="column">
          <ParticipatingTokens />
          <PersonalTrading />
        </StyledFlex>
      </Flex>
    </Page>
  )
}

export default Trading
