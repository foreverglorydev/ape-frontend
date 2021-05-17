import React from 'react'
import Page from 'components/layout/Page'
import { Heading } from '@apeswapfinance/uikit'
import { useParams } from 'react-router-dom'
import TradingTable from './Trading'
import PersonalTrading from './PersonalTrading'

const Trading = () => {
  const {
    season = '0',
    pair = '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
  }: { season?: string; pair?: string } = useParams()

  return (
    <Page>
      <Heading as="h2" size="xl" mb="24px" mt="24px" color="secondary">
        Season: {season}
      </Heading>
      <Heading as="h2" size="xl" mb="24px" mt="24px" color="secondary">
        Pair: BANANA/BNB
      </Heading>
      <PersonalTrading />
      <TradingTable />
    </Page>
  )
}

export default Trading
