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

  const ordenAlpha = (countries) => {
    if (filters.alpha === 'all') return countries

    if (filters.alpha === 'asc') {
      return countries.sort((a, b) => {
        if (a.nombre > b.nombre) {
          return 1
        }
        if (b.nombre > a.nombre) {
          return -1
        }
        return 0
      })
    }
    if (filters.alpha === 'des') {
      return countries.sort((a, b) => {
        if (a.nombre > b.nombre) {
          return -1
        }
        if (b.nombre > a.nombre) {
          return 1
        }
        return 0
      }
      )
    }
  }

  return { filters, filterContinents, ordenAlpha, setFilters }
}
