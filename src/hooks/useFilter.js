import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilter () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterContinents = (countries) => {
    return countries.filter(country => {
      return (
        filters.continents === 'all' ||
        filters.continents === country.region
      )
    })
  }
  return { filters, filterContinents, setFilters }
}
