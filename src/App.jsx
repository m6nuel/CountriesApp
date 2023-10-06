import './App.css'
import Aside from './components/Aside'
import Countries from './components/Countries'
import { countriess } from '../src/service/countries'
import { useFilter } from './hooks/useFilter'
import Footer from './components/Footer'
import Header from './components/Header'
import { useContext } from 'react'
import { FiltersContext } from './context/filters'

function App () {
  const { filterContinents, ordenAlpha } = useFilter()
  const continentsFiltered = filterContinents(countriess)
  const continentsOrdered = ordenAlpha(continentsFiltered)
  const { filters } = useContext(FiltersContext)

  const cfiltSearch = filterContinents(filters.search)
  const cfilOrdered = ordenAlpha(cfiltSearch)
  const hasSearch = filters.search.length > 0

  const cOrdered = continentsOrdered.length > 0
  console.log(cOrdered)
  return (
    <>
      <Header />
      <Aside />
      {
        hasSearch
          ? <Countries countries={cfilOrdered} />
          : <Countries countries={continentsOrdered} />
      }
      <Footer />
    </>
  )
}

export default App
