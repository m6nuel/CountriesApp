function Header () {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Buscar País: </label>
        <input type="text" placeholder="Argentina, Bolivia, colomb..." />
        <button type="submit">Buscar</button>
      </form>
    </>
  )
}
export default Header
