import './App.css'
import Aside from './components/Aside'
import Countries from './components/Countries'
import { countriess } from '../src/service/countries'
import { useFilter } from './hooks/useFilter'
import Footer from './components/Footer'

function App () {
  const { filterContinents, ordenAlpha } = useFilter()
  const continentsFiltered = filterContinents(countriess)
  const continentsOrdered = ordenAlpha(continentsFiltered)
  return (
    <>
      <h1>Countries App</h1>
      <Aside />
      <Countries countries={continentsOrdered} />
      <Footer />
    </>
  )
}

export default App
