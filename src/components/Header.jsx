import { useSearch } from '../hooks/useSearch'

function Header () {
  const { handleChange, handleSubmit, search } = useSearch()
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
