import { PoolConfig } from 'config/constants/types'
import { useEffect, useState } from 'react'
import { getPools } from '../../hooks/api'

const useFetchPoolsStrapi = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pools: PoolConfig[] = await getPools()
        setState(pools)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }
    fetchData()
  }, [])

  return state
}

export default useFetchPoolsStrapi
