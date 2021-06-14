import React from 'react'
import styled from 'styled-components'
import { Card, Text, Flex, ArrowDropDownIcon } from '@apeswapfinance/uikit'

const ParticipatingTokens = () => {

  const StyledCard = styled(Card)`
    background-image: url('/images/trading-card.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 174px;
    background-color: #ffb300;
    margin-bottom: 10px;
  `

  const StyledTextSmaller = styled(Text)`
    font-weight: bold;
    line-height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    margin-top: 12px;
  `

  const StyledToken = styled.img`
    margin-top: 12px;
    margin-right: 33px;
    margin-left: 33px;
    width: 83px;
    height: 82px;
    border-radius: 67px;
  `

  const StyledTokenText = styled.div`
    font-family: Poppins;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  `

  const StyledArrow = styled(ArrowDropDownIcon)`
    transform: rotate(-90deg);
    fill: #faf9fa;
    width: 15px;
  `

  return (
      <StyledCard>
        <StyledTextSmaller fontSize="25px" color="white" fontFamily="poppins">Participating Tokens</StyledTextSmaller>
        <Flex justifyContent="center" alignItems="center">
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <StyledToken src="/images/tokens/banana.svg" alt="banana-token" />
            <StyledTokenText>BANANA</StyledTokenText>
          </Flex>
          <StyledArrow />
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <StyledToken src="/images/tokens/banana.svg" alt="banana-token" />
            <StyledTokenText>BANANA</StyledTokenText>
          </Flex>
        </Flex>
      </StyledCard>
  )
}

export default ParticipatingTokens