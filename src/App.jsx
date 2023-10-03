import './App.css'
import Aside from './components/Aside'
import Countries from './components/Countries'
import { countriess } from '../src/service/countries'
import { useFilter } from './hooks/useFilter'

function App () {
  const { filterContinents } = useFilter()
  const continentsFiltered = filterContinents(countriess)
  return (
    <>
      <h1>Countries App</h1>
      <Aside />
      <Countries countries={continentsFiltered} />
    </>
  )
}

export default App
