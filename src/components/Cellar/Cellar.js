import { useState, useEffect } from 'react'
import Inventory from './Inventory'
import Bottles from '../Bottles/Bottles'
import AddBottle from '../Bottles/AddBottle'
import Table from './Table/Table'
import './Cellar.css'
// import BasicTable from './Table/BasicTable'
// import CustomizedTable from './Table/CustomizedTable'
// import BasicFilteringGrid from './Table/BasicFilteringGrid'

const Cellar = () => {
  const [showAddBottle, setShowAddBottle] = useState(false)
  const [bottles, setBottles] = useState([])

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
      <div className='cellar'>
        <div className='grid'>
          <Table />
        </div>
        <div className='add-bottle-btn'>
          <Inventory onAdd={() => setShowAddBottle(!showAddBottle)}
            showAdd={showAddBottle}
          />
          {showAddBottle && <AddBottle onAdd={addBottle}/>}
        </div>
        {/* <div className="inventory-container">
          <Bottles bottles={bottles} onDelete={deleteBottle}/>
        </div> */}
      </div>
    )
}

export default Cellar