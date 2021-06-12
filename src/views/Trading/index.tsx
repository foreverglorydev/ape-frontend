import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Heading, Card, Text, Button, Flex, CardRibbon } from '@apeswapfinance/uikit'
import { useParams } from 'react-router-dom'
import TradingTable from './Trading'
import PersonalTrading from './PersonalTrading'

const Trading = () => {
  const {
    season = '0',
    pair = '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
  }: { season?: string; pair?: string } = useParams()

  const StyledCard = styled(Card)`
    background-image: url('/images/leaf-banner.svg');
    background-repeat: no-repeat;
    min-height: 220px;
    background-color: #ffb300;
  `

  const StyledCard2 = styled(Card)`
    background-image: url('/images/trading-card.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 174px;
    background-color: #FFB300;
  `

  const StyledText = styled(Text)`
    font-family: Poppins;
    font-weight: 700;
    font-size: 37px;
    line-height: 55px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #ffffff;
  `

  const StyledTextSmaller = styled(Text)`
    font-family: Poppins;
    font-weight: bold;
    font-size: 25px;
    line-height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    margin-top: 12px;
  `

  const StyledTextSubHead = styled(Text)`
    font-family: Poppins;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #ffffff;
  `

  const StyledButton = styled(Button)`
    background: #fafafa;
    border-radius: 10px;
    padding: 10px 40px;
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ffb300;
    width: 193px;
    height: 36px;
  `

  const StyledContainer = styled.div`
    margin-top: 52px;
    margin-left: 35px;
  `

  const StyledImg = styled.img`
    height: 190px;
    width: 182px;
    margin-top: 12px;
    margin-right: 155px;
  `
  // const StyledFarmStakingCard = styled(Card)`
  // margin-left: auto;
  // margin-right: auto;
  // height: 100% !important;
  // display: flex !important;
  // flex-direction: column !important;
  // flex: 1;
  // background: ${({ theme }) => (theme.isDark ? '#27262c' : '#A16552')};
  // width: 100%;
  // max-height: 160px;
  // text-align: center;

  return (
    <Page>
      <StyledCard ribbon={<CardRibbon text="Ribbon" variantColor="success" />}>
        <Flex justifyContent="space-between">
          <StyledContainer>
            <StyledText>Ape trading competition</StyledText>
            <StyledTextSubHead>Here is info about the trading comp</StyledTextSubHead>
            <Flex mt="20px" alignItems="center">
              <StyledButton
                as="a"
                // href="https://obiedobo.gitbook.io/apeswap-finance/tokens-and-economics/golden-banana"
                target="_blank"
              >
                READ MORE
              </StyledButton>
              <Flex>
                <StyledTextSubHead>NEXT AIR DROP IN: </StyledTextSubHead>
                <StyledText>TIME</StyledText>
              </Flex>
            </Flex>
          </StyledContainer>
          <StyledImg src="/images/trophy-circle.svg" alt="trophy" />
        </Flex>
      </StyledCard>
      <StyledCard2>
        <StyledTextSmaller>Participating Tokens</StyledTextSmaller>
      </StyledCard2>
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
