import Chai from "./chai" 

function App() {
const username = 'chai banao'

// {username} - it is called as Evaluated expression as we can only pass evaluated 
// output of js expression

  return (
    <>
      <Chai/>
      <h1>chai is above {username}</h1>
      <p>test para</p>
    </>
  )
}

export default App
