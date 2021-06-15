import React from 'react'
import styled from 'styled-components'
import { Card, Text, Button, Flex, CardRibbon } from '@apeswapfinance/uikit'

const HeroCard = () => {
  const StyledCard = styled(Card)`
    background-image: url('/images/leaf-banner.svg');
    background-repeat: no-repeat;
    min-height: 220px;
    background-color: #ffb300;
    margin-bottom: 10px;
    max-width: 100%;
    margin-left: 0px;
    margin-right: 0px;

    ${({ theme }) => theme.mediaQueries.md} {
      margin-bottom: 0px;
    }
  `

  const StyledText = styled(Text)`
    font-weight: 700;
    line-height: 30px;
    text-transform: uppercase;
    font-size: 20px;
    max-width: 190px;

    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 25px;
    }

    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 37px;
      max-width: 100%;
    }
  `

  const StyledTextSubHead = styled(Text)`
    line-height: 21px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    fontsize: 12px;
    max-width: 200px;

    ${({ theme }) => theme.mediaQueries.xs} {
        fontsize: 14px;
    }
    
    ${({ theme }) => theme.mediaQueries.sm} {
      max-width: 100%;
    }
  `

  const StyledButton = styled(Button)`
    background: #fafafa;
    border-radius: 10px;
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ffb300;
    width: 150px;
    height: 36px;
    justify-content: center;
    align-items: center;
    display: flex;

    ${({ theme }) => theme.mediaQueries.xs} {
        width: 166px;
    }
   
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 193px;
    }
  `

  const StyledContainer = styled.div`
    margin-top: 52px;
    margin-left: 35px;
  `

  const StyledImg = styled.img`
    height: 80px;
    width: auto;
    margin-top: 70px;
    margin-right: 20px;
    margin-left: -80px;
    ${({ theme }) => theme.mediaQueries.xs} {
        height: 128px;
        width: 113px;
        margin-top: 30px;
        margin-right: 20px;
        margin-left: -120px;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      height: 190px;
      width: 182px;
      margin-top: 12px;
      margin-right: 155px;
      margin-left: 0px;
    }
  `

  const StyledFlexAirdrop = styled(Flex)`
    flex-direction: column;
    ${({ theme }) => theme.mediaQueries.sm} {
      flex-direction: row;
    }
  `

  return (
    <StyledCard ribbon={<CardRibbon text="Ribbon" variantColor="success" />}>
      <Flex justifyContent="space-between" mb="10px">
        <StyledContainer>
          <StyledText color="white" fontFamily="poppins">
            TRADING COMPETITION
          </StyledText>
          <StyledTextSubHead color="white" fontFamily="poppins">
            Here is info about the trading comp
          </StyledTextSubHead>
          <Flex mt="20px" alignItems="center">
            <StyledButton
              as="a"
              // href="https://obiedobo.gitbook.io/apeswap-finance/tokens-and-economics/golden-banana"
              target="_blank"
            >
              READ MORE
            </StyledButton>
            <StyledFlexAirdrop ml="16px">
              <StyledTextSubHead color="white" fontFamily="poppins">
                NEXT AIR DROP:{' '}
              </StyledTextSubHead>
              <StyledText color="white" fontFamily="poppins">
                TIME
              </StyledText>
            </StyledFlexAirdrop>
          </Flex>
        </StyledContainer>
        <StyledImg src="/images/trophy-circle.svg" alt="trophy" />
      </Flex>
    </StyledCard>
  )
}

export default HeroCard
