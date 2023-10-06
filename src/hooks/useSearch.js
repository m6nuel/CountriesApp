import { useState, useContext } from 'react'
import { getCountriesByName } from '../service/countries'
import { FiltersContext } from '../context/filters'

export function useSearch () {
  const [search, setSearch] = useState('')
  const { setFilters } = useContext(FiltersContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const countries = await getCountriesByName({ search })

    if (countries) {
      setFilters(prevState => ({
        ...prevState,
        continents: 'all',
        search: countries
      }))
    }
    setSearch('')
  }

  const handleChange = (e) => {
    const search = e.target.value
    setSearch(search)
  }
  return { handleChange, handleSubmit, search }
}
