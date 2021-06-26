import React, { useState, useEffect } from 'react'
import { Text, Flex, MonkeyLight } from '@apeswapfinance/uikit'

import styled from 'styled-components'
import format from 'format-number'
import getProfile from 'state/profile/getProfile'
import { AddressStatsDto } from 'hooks/api'

// import { fetchProfileTrading } from 'state/trading'

const StyledHeader = styled(Text)`
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
`

const StyledText = styled(Text)`
  font-family: Poppins;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 15px;
  }
`

const StyledTR = styled(Flex)<{ ranking: number }>`
  padding: 16px;
  text-align: center;
  font-family: 'Poppins';
  width: 100%;
  background: ${({ ranking }) =>
    (ranking === 1 && 'linear-gradient(90.21deg, #FFB300 0.97%, #FCD988 76.73%, #FFB300 117.33%)') ||
    (ranking === 2 &&
      'linear-gradient(90deg, #D3D3C7 0%, #F2F3E1 10.72%, #D8D9C9 43.75%, #E8E9DE 65.62%, #D8D9C9 94.27%)') ||
    (ranking === 3 &&
      'linear-gradient(89.96deg, #F4AA6B 0.03%, #FAC69A 31.01%, #F4AA6B 69.24%, #FFD4AF 99.56%, #F4AA6B 126.58%)') ||
    '#FFFFFF'};

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 10px;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 400px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    min-width: 537px;
  }
`

const StyledRanking = styled.div<{ ranking: number }>`
  background-image: -webkit-linear-gradient(53.53deg, #a16552 15.88%, #e1b242 92.56%);
  background-image: gradient(
    linear,
    left top,
    right top,
    color-stop(0, #f22),
    color-stop(0.15, #f2f),
    color-stop(0.3, #22f),
    color-stop(0.45, #2ff),
    color-stop(0.6, #2f2),
    color-stop(0.75, #2f2),
    color-stop(0.9, #ff2),
    color-stop(1, #f22)
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: Poppins;
  font-size: 30px;
  line-height: 45px;
  font-weight: bold;
  z-index: 10;
  margin-top: 10px;
  color: ${({ ranking }) => (ranking === 1 || ranking === 2 || ranking === 3) && '#FFFFFF'};
  background-clip: ${({ ranking }) => ranking > 3 && 'text'};
`

const StyledAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 67px;
  background-color: white;
  margin-right: 10px;
`

const StyledMonkeyLight = styled(MonkeyLight)`
  display: inline-block;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    display: inline-block;
  }
`

const StyledFlexColumn = styled(Flex)`
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.xs} {
    margin-right: 30px;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    margin-right: 10px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 30px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 50px;
  }
`

const StyledFlexColumnLast = styled(Flex)`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`

const StyledHeading = styled(Text)`
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
    margin: 0px;
  }
`
const Trading = ({ tradingStats }: { tradingStats: AddressStatsDto[] }) => {
  const [tradingData, setTradingData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        tradingStats?.slice(0, 10).map(async (stat) => {
          const formatedStat: any = { ...stat }
          formatedStat.user = `${stat.user.substring(0, 4)}...${stat.user.substring(stat.user.length - 4)}`
          formatedStat.pair = `${stat.pair.substring(0, 4)}...${stat.pair.substring(stat.pair.length - 4)}`
          const nfaData = await getProfile(stat.user)
          formatedStat.image = nfaData ? nfaData.rarestNft.image : null
          formatedStat.totalTradedUsd = format({ prefix: '$', truncate: 2 })(stat.volume)
          formatedStat.pendingBananaRewards = format({ truncate: 2 })(stat.prize)
          return formatedStat
        }),
      )
      setTradingData(data)
    }
    fetchData()
  }, [tradingStats])

  return (
    <div>
      <div style={{ width: '100%' }}>
        <StyledHeading color="text" fontFamily="poppins" fontSize="24px">
          Season Results
        </StyledHeading>
        <div>
          {tradingData.length > 0 &&
            tradingData.map((row) => {
              return (
                <StyledTR ranking={row.ranking} key={row.ranking}>
                  <Flex>
                    {row.image ? (
                      <StyledAvatar src={row.image} />
                    ) : (
                      <StyledMonkeyLight width="64px" height="64px" mr="10px" />
                    )}
                    <StyledRanking ranking={row.ranking}>{row.ranking}</StyledRanking>
                  </Flex>
                  <StyledFlexColumn flexDirection="column" justifyContent="center" ml="10px">
                    <StyledHeader color={row.ranking <= 3 ? 'white' : 'primary'}>Wallet</StyledHeader>
                    <StyledText color={row.ranking <= 3 ? 'white' : 'primary'}>{row.user}</StyledText>
                  </StyledFlexColumn>
                  <StyledFlexColumn flexDirection="column" justifyContent="center">
                    <StyledHeader color={row.ranking <= 3 ? 'white' : 'primary'}>Volume</StyledHeader>
                    <StyledText color={row.ranking <= 3 ? 'white' : 'primary'}>{row.totalTradedUsd}</StyledText>
                  </StyledFlexColumn>
                  <StyledFlexColumnLast flexDirection="column" justifyContent="center">
                    <StyledHeader color={row.ranking <= 3 ? 'white' : 'primary'}>Reward</StyledHeader>
                    <StyledText color={row.ranking <= 3 ? 'white' : 'primary'}>
                      {row.pendingBananaRewards} BANANA
                    </StyledText>
                  </StyledFlexColumnLast>
                </StyledTR>
              )
            })}
        </div>
      </div>
    </div>
  )
}
export default Trading
