import { useState, useEffect } from 'react'
import Dashboard from './Dashboard'
import './Overview.css'

const Overview = () => {
    
    // Set State
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

    // Get Bottle Count
    var bottleCount = bottles.length;

    return (
        <>
            <div class="overview">
                <Dashboard bottleCount={bottleCount} />
                {/* <Dashboard bottleCount={bottleCount} /> */}
            </div>
        </>
    )
}

export default Overview