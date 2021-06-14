import React from 'react'
import styled from 'styled-components'
import { Card, Text, Button, Flex, CardRibbon } from '@apeswapfinance/uikit'

const HeroCard = () => {
 
  const StyledCard = styled(Card)`
    background-image: url('/images/leaf-banner.svg');
    background-repeat: no-repeat;
    min-height: 220px;
    background-color: #ffb300;
  `

  const StyledText = styled(Text)`
    font-weight: 700;
    line-height: 30px;
    text-transform: uppercase;
  `

  const StyledTextSubHead = styled(Text)`
    line-height: 21px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  `

  const StyledButton = styled(Button)`
    background: #fafafa;
    border-radius: 10px;
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ffb300;
    width: 193px;
    height: 36px;
    justify-content: center;
    align-items: center;
    display: flex;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 166px;
    }
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

  return (
      <StyledCard ribbon={<CardRibbon text="Ribbon" variantColor="success" />}>
        <Flex justifyContent="space-between">
          <StyledContainer>
            <StyledText fontSize="37px" color="white" fontFamily="poppins">TRADING COMPETITION</StyledText>
            <StyledTextSubHead fontSize="14px" color="white" fontFamily="poppins">Here is info about the trading comp</StyledTextSubHead>
            <Flex mt="20px" alignItems="center">
              <StyledButton
                as="a"
                // href="https://obiedobo.gitbook.io/apeswap-finance/tokens-and-economics/golden-banana"
                target="_blank"
              >
                READ MORE
              </StyledButton>
              <Flex ml="16px">
                <StyledTextSubHead fontSize="14px" color="white" fontFamily="poppins">NEXT AIR DROP IN: </StyledTextSubHead>
                <StyledText fontSize="37px" color="white" fontFamily="poppins">TIME</StyledText>
              </Flex>
            </Flex>
          </StyledContainer>
          <StyledImg src="/images/trophy-circle.svg" alt="trophy" />
        </Flex>
      </StyledCard>
  )
}

export default HeroCard
