import { useState } from 'react'

function Header () {
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch('')
    console.log(search)
  }

  const handleChange = (e) => {
    const search = e.target.value
    setSearch(search)
    console.log(search)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Buscar País: </label>
        <input
          onChange={handleChange}
          placeholder="Argentina, Bolivia, colomb..."
          value={search}
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  )
}
export default Header
