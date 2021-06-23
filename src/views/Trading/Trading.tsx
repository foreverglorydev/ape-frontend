import React, { useMemo } from 'react'
import { ColumnType, DataType, Heading, useTable, Text, Flex } from '@apeswapfinance/uikit'
import { useGetTradingStats } from 'hooks/api'

import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import format from 'format-number'

import getProfile from './GetProfile'
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
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 67px;
  background-color: red;
`

const StyledFlexColumn = styled(Flex)`
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.xs} {
    margin-right: 30px;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    margin-right: 50px;
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

const Table = ({ data }) => {
  return (
    <div style={{ width: '100%' }}>
      <StyledHeading color="text" fontFamily="poppins" fontSize="24px">
        Season Results
      </StyledHeading>
      <div>
        {data &&
          data.map((row) => {
            // const image = await getProfile(row.address)
            // debugger; // eslint-disable-line no-debugger
            return (
              <StyledTR ranking={row.ranking}>
                <Flex>
                  <StyledRanking ranking={row.ranking}>{row.ranking}</StyledRanking>
                  {/* <StyledAvatar src={image} alt="nfa" /> */}
                </Flex>
                <StyledFlexColumn flexDirection="column" justifyContent="center" ml="50px">
                  <StyledHeader color={row.ranking <= 3 ? 'white' : 'primary'}>Wallet</StyledHeader>
                  <StyledText color={row.ranking <= 3 ? 'white' : 'primary'}>
                    {row.address.substr(1, 3)}....{row.address.substr(row.address.length - 5)}
                  </StyledText>
                </StyledFlexColumn>
                <StyledFlexColumn flexDirection="column" justifyContent="center">
                  <StyledHeader color={row.ranking <= 3 ? 'white' : 'primary'}>Volume</StyledHeader>
                  <StyledText color={row.ranking <= 3 ? 'white' : 'primary'}>
                    {row.totalTradedUsd.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </StyledText>
                </StyledFlexColumn>
                <StyledFlexColumnLast flexDirection="column" justifyContent="center">
                  <StyledHeader color={row.ranking <= 3 ? 'white' : 'primary'}>Reward</StyledHeader>
                  <StyledText color={row.ranking <= 3 ? 'white' : 'primary'}>
                    {row.pendingBananaRewards.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}{' '}
                    BANANA
                  </StyledText>
                </StyledFlexColumnLast>
              </StyledTR>
            )
          })}
      </div>
    </div>
  )
}

const Trading = ({ stub }: { stub: any }) => {
  // const {
  //   season = '0',
  //   pair = '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
  // }: { season?: string; pair?: string } = useParams()

  // const { data: tradingStats } = useGetTradingStats(pair, season)

  // const data = useMemo(() => {
  //   let currentRank = 0
  //   debugger; // eslint-disable-line no-debugger
  //   return tradingStats?.map(async (stat) => {
  //     const formatedStat: any = { ...stat }
  //     formatedStat.address = `${stat.address.substring(0, 4)}...${stat.address.substring(stat.address.length - 4)}`
  //     formatedStat.image = await getProfile(formatedStat.address)
  //     formatedStat.pair = `${stat.pair.substring(0, 4)}...${stat.pair.substring(stat.pair.length - 4)}`
  //     currentRank++
  //     formatedStat.ranking = currentRank
  //     formatedStat.totalTradedUsd = format({ prefix: '$', truncate: 2 })(stat.totalTradedUsd)
  //     formatedStat.pendingBananaRewards = format({ truncate: 2 })(stat.pendingBananaRewards)
  //     return formatedStat
  //   })
  // }, [tradingStats])

  // const memoColumns = useMemo(
  //   () => [
  //     {
  //       label: 'Ranking',
  //       name: 'ranking', // accessor is the "key" in the data
  //     },
  //     {
  //       label: 'Address',
  //       name: 'address',
  //     },
  //     {
  //       label: 'Volume',
  //       name: 'totalTradedUsd',
  //     },
  //     {
  //       label: 'Banana Rewards',
  //       name: 'pendingBananaRewards',
  //     },
  //   ],
  //   [],
  // )
  // const memoData = useMemo(() => data, [data])

  // const stub = [
  //   {
  //     _id: '60c4fb01f05177284951a0e3',
  //     address: '0xd74ca4b1fc803f2a5f46fdd5831759b6f3cec334',
  //     pair: '0x73cddf4ea34dbd872f89e98c2866c81929aafe50',
  //     season: 1,
  //     pendingBananaRewards: 34.508900398555106,
  //     totalTradedUsd: 34508.9003985551,
  //     ranking: 1,
  //   },
  //   {
  //     _id: '60c4fb01f05177284951a124',
  //     address: '0x743fc05850fac2ce03251704cda96f5e09146cac',
  //     pair: '0x73cddf4ea34dbd872f89e98c2866c81929aafe50',
  //     season: 1,
  //     pendingBananaRewards: 14.778764736753105,
  //     totalTradedUsd: 14778.764736753106,
  //     ranking: 2,
  //   },
  //   {
  //     _id: '60c4fb01f05177284951a0d6',
  //     address: '0xae577c2ecaba8ed21fde92f4ff0e95f7ae8d5183',
  //     pair: '0x73cddf4ea34dbd872f89e98c2866c81929aafe50',
  //     season: 1,
  //     pendingBananaRewards: 13.36405908316909,
  //     totalTradedUsd: 13364.05908316909,
  //     ranking: 3,
  //   },
  //   {
  //     _id: '60c4fb01f05177284951a0c7',
  //     address: '0x861576f573b0a1baf1bf7f33267678d13d44d4ea',
  //     pair: '0x73cddf4ea34dbd872f89e98c2866c81929aafe50',
  //     season: 1,
  //     pendingBananaRewards: 11.52014133169429,
  //     totalTradedUsd: 11520.141331694289,
  //     ranking: 4,
  //   },
  //   {
  //     _id: '60c4fb01f05177284951a136',
  //     address: '0xb1a5d4460453747f0106c07838c92743243ac551',
  //     pair: '0x73cddf4ea34dbd872f89e98c2866c81929aafe50',
  //     season: 1,
  //     pendingBananaRewards: 11.291199062464795,
  //     totalTradedUsd: 11291.199062464795,
  //     ranking: 5,
  //   },
  //   {
  //     _id: '60c4fb01f05177284951a104',
  //     address: '0x232231e859cd568a0fc7fb91d1a8ede119d48608',
  //     pair: '0x73cddf4ea34dbd872f89e98c2866c81929aafe50',
  //     season: 1,
  //     pendingBananaRewards: 9.735348975342822,
  //     totalTradedUsd: 9735.348975342822,
  //     ranking: 6,
  //   },
  //   {
  //     _id: '60c4fb01f05177284951a0ac',
  //     address: '0x53ab22dd7b527108cb2a89f923704a0929ccb234',
  //     pair: '0x73cddf4ea34dbd872f89e98c2866c81929aafe50',
  //     season: 1,
  //     pendingBananaRewards: 9.674196601685546,
  //     totalTradedUsd: 9674.196601685546,
  //     ranking: 7,
  //   },
  // ]

  const stub2 = () => {
    debugger // eslint-disable-line no-debugger
    stub.map(async (item) => {
      debugger // eslint-disable-line no-debugger
      const profile = await getProfile(item.address)
      debugger // eslint-disable-line no-debugger
      // stub.profile = profile
    })
  }

  return (
    <div>
      <Table data={stub} />
      {/* {data && <Table data={stub} />} */}
    </div>
  )
}
export default Trading
