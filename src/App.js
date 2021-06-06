import { useState, useEffect } from 'react'
import Header from './components/Header'
import Bottles from './components/Bottles'
import AddBottle from './components/AddBottle'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const [showAddBottle, setShowAddBottle] = useState(false)
  const [bottles, setBottles] = useState([
])

useEffect(() => {
  const getBottles = async () => {
    const bottlesFromServer = await fetchBottles()
    setBottles(bottlesFromServer)
  }

  getBottles()
}, [])

// Fetch Bottles
const fetchBottles = async () => {
  const res = await fetch('http://localhost:5000/bottles')
  const data = await res.json()

  return data
}

// Add Bottle
const addBottle = async (bottle) => {
  const res = await fetch('http://localhost:5000/bottles', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(bottle)
  })

  const data = await res.json()

  setBottles([...bottles, data])
}

// Delete Bottle
const deleteBottle = async (id) => {
  await fetch(`http://localhost:5000/bottles/${id}`, {
    method: 'DELETE'
  })

  setBottles(bottles.filter((bottle) => bottle.id !== id))
}

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header onAdd={() => setShowAddBottle(!showAddBottle)}
        showAdd={showAddBottle}
        />
        {showAddBottle && <AddBottle onAdd={addBottle}/>}
        <Bottles bottles={bottles} onDelete={deleteBottle}/>
      </div>
    </div>
    
  );
}

export default App;
