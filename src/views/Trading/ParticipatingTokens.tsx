import React from 'react'
import styled from 'styled-components'
import { Card, Text, Flex, ArrowDropDownIcon } from '@apeswapfinance/uikit'

const ParticipatingTokens = (seasonInfo) => {
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
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    margin-top: 12px;

    font-size: 20px;

    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 25px;
      max-width: 100%;
      margin-left: 50px;
      margin-right: 50px;
    }
  `

  const StyledToken = styled.img`
    margin-top: 12px;
    margin-right: 33px;
    margin-left: 33px;
    width: 63px;
    height: 62px;
    border-radius: 67px;

    ${({ theme }) => theme.mediaQueries.xs} {
      width: 73px;
      height: 72px;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 83px;
      height: 82px;
    }
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
  const { tokenName1, tokenImage1, tokenName2, tokenImage2 } = seasonInfo
  return (
    <StyledCard>
      <StyledTextSmaller color="white" fontFamily="poppins">
        Participating Tokens
      </StyledTextSmaller>
      <Flex justifyContent="center" alignItems="center">
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <StyledToken src={tokenImage1} alt="banana-token" />
          <StyledTokenText>{tokenName1}</StyledTokenText>
        </Flex>
        <StyledArrow />
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <StyledToken src={tokenImage2} alt="banana-token" />
          <StyledTokenText>{tokenName2}</StyledTokenText>
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default ParticipatingTokens
