import React, { useMemo } from 'react'
import { ColumnType, DataType, Heading, useTable } from '@apeswapfinance/uikit'
import { useGetTradingStats } from 'hooks/api'

import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import format from 'format-number'

const StyledCell = styled.td`
padding: 16px;
text-align: center;
font-family: 'Poppins';
`

const Table = <T extends DataType>({ _columns, _data }: { _columns: ColumnType<T>[]; _data: T[] }) => {
  const { headers, rows } = useTable(_columns, _data, {
    sortable: true,
  });

  return (
    <table style={{width: '100%'}}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={`header-${header.name}`} data-testid={`column-${header.name}`} style={{fontFamily: 'Poppins'}}>
              {header.label}

              {header.sorted && header.sorted.on ? <span data-testid={`sorted-${header.name}`} /> : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr data-testid={`row-${row.id}`} key={row.id}>
            {row.cells.map((cell) => (
              <StyledCell>{cell.render()}</StyledCell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Trading = () => {
  const { season = '0', pair = '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713' }: { season?: string, pair?: string } = useParams()

  const {data: tradingStats} = useGetTradingStats(pair, season)

  const data = useMemo(() => {
      let currentRank = 0
      return tradingStats?.map((stat) => {
      const formatedStat: any = {...stat};
      formatedStat.address = `${stat.address.substring(0, 4)}...${stat.address.substring(stat.address.length - 4)}`;
      formatedStat.pair = `${stat.pair.substring(0, 4)}...${stat.pair.substring(stat.pair.length - 4)}`;
      currentRank++
      formatedStat.ranking = currentRank
      formatedStat.totalTradedUsd = format({prefix: '$', truncate: 2 })(stat.totalTradedUsd);
      formatedStat.pendingBananaRewards = format({truncate: 2 })(stat.pendingBananaRewards);
      return formatedStat
    })
  }, [tradingStats])

  const memoColumns = useMemo(() => [
    {
      label: 'Ranking',
      name: 'ranking', // accessor is the "key" in the data
    },
    {
      label: 'Address',
      name: 'address',
    },
    {
      label: 'Volume',
      name: 'totalTradedUsd',
    },
    {
      label: 'Banana Rewards',
      name: 'pendingBananaRewards',
    },
  ], []);
  const memoData = useMemo(() => data, [data]);

  return (
    <div>
      <Heading as="h2" size="lg" mb="24px" mt="24px" color="secondary">
        Season Results
      </Heading>
      {data && (<Table _columns={memoColumns} _data={memoData} />) }
    </div>
  )
}
export default Trading
