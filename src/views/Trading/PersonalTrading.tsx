import React, { useMemo } from 'react'
import { Card, CardBody, ColumnType, DataType, Flex, Heading, Text, useTable } from '@apeswapfinance/uikit'
import { useGetPersonalTradingStats } from 'hooks/api'

import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import CardValue from 'views/Home/components/CardValue'
import useI18n from 'hooks/useI18n'
import { usePriceBananaBusd } from 'state/hooks'
import UnlockButton from 'components/UnlockButton'
import PageLoader from 'components/PageLoader'
import { useParams } from 'react-router-dom'

const StyledCell = styled.td`
  padding: 16px;
`
const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Trading = () => {
  const { account } = useWallet()
  const {
    season = '0',
    pair = '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
  }: { season?: string; pair?: string } = useParams()

  const { data: tradingStats, loading } = useGetPersonalTradingStats(pair, account, season)
  const bananaUsdPrice = usePriceBananaBusd()
  const TranslateString = useI18n()

  return (
    <div>
      <Heading as="h2" size="lg" mb="24px" mt="24px" color="secondary">
        Personal Results
      </Heading>
      {!account ? (
        <UnlockButton fullWidth />
      ) : (
        <Card>
          {/* eslint-disable-next-line no-nested-ternary */}
          {tradingStats ? (
            <CardBody>
              <Flex justifyContent="flex-start" alignItems="center" marginBottom="12px">
                <Heading fontSize="16px" mb="24px" style={{ textAlign: 'center' }}>
                  Wallet Stats
                </Heading>
              </Flex>
              <Row>
                <Text fontSize="14px">{TranslateString(536, 'Your Volume')}</Text>
                <CardValue fontSize="14px" decimals={2} value={tradingStats.totalTradedUsd} prefix="$" />
              </Row>
              <Row>
                <Text fontSize="14px">{TranslateString(536, 'Your Pending Rewards')}</Text>
                <div>
                  <CardValue fontSize="14px" decimals={2} value={tradingStats.pendingBananaRewards} />
                  <CardValue
                    fontSize="10px"
                    decimals={2}
                    value={bananaUsdPrice.times(tradingStats.pendingBananaRewards).toNumber()}
                    prefix="$"
                  />
                </div>
              </Row>
            </CardBody>
          ) : loading ? (
            <PageLoader />
          ) : (
            <Heading fontSize="16px" mb="24px" m="16px" style={{ textAlign: 'center' }}>
              No Volume for this pair
            </Heading>
          )}
        </Card>
      )}
    </div>
  )
}
export default Trading
