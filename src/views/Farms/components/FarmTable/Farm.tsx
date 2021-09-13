import React from 'react'
import styled from 'styled-components'
import { Text, Image } from '@apeswapfinance/uikit'

export interface FarmProps {
  label: string
  tokenSymbol?: string
  quoteTokenSymbol?: string
  pid: number
  image?: string
}

const IconImage = styled(Image)`
  width: 24px;
  height: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 57px;
    height: 57px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StyledBackground = styled.div`
  width: 180px;
  height: 60px;
  background: rgb(255, 179, 0, 0.4);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`

const Farm: React.FunctionComponent<FarmProps> = ({ image, label, tokenSymbol, quoteTokenSymbol }) => {
  console.log(quoteTokenSymbol)
  return (
    <Container>
      <StyledBackground>
        <IconImage src={`/images/tokens/${quoteTokenSymbol}.svg`} alt={quoteTokenSymbol} width={50} height={50} marginLeft="5px"/>
        <IconImage
          src={`/images/tokens/${tokenSymbol}.svg`}
          alt={tokenSymbol}
          width={50}
          height={50}
          marginLeft="-20px"
        />
        <IconImage src="/images/arrow.svg" alt="arrow" width={18} height={18} />
        <IconImage src="/images/tokens/BANANA.svg" alt="icon" width={50} height={50} marginRight="5px" />
      </StyledBackground>
      <div>
        <Text fontSize="20px" bold>
          {label}
        </Text>
      </div>
    </Container>
  )
}

export default Farm
