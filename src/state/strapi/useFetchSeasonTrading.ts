import { useEffect, useState } from 'react'
import { getSeasonsTrading } from '../../hooks/api'

const useFetchSeasonTrading = () => {
  const [state, setState] = useState({
    seasons: [],
    loading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getSeasonsTrading()
        setState({
          seasons: list,
          loading: false,
        })
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }
    fetchData()
  }, [])

  return state
}

export default useFetchSeasonTrading
