import { useState } from 'react'

const AddBottle = ({ onAdd }) => {
    const [product, setProduct] = useState('')
    const [vintage, setVintage] = useState('')
    const [producer, setProducer] = useState('')
    const [countryCode, setCountryCode] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!product) {
            alert('Please add a product')
            return
        }

        onAdd({ product, vintage, producer, countryCode})

        setProduct('')
        setVintage('')
        setProducer('')
        setCountryCode('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Product</label>
                <input type='text' 
                placeholder='Add Product' 
                value={product} 
                onChange={(e) => setProduct(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Vintage</label>
                <input type='text' 
                placeholder='Add Vintage' 
                value={vintage} 
                onChange={(e) => setVintage(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Producer</label>
                <input type='text' 
                placeholder='Add Producer'
                value={producer} 
                onChange={(e) => setProducer(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Country Code</label>
                <input type='text' 
                placeholder='Add Country Code'
                value={countryCode} 
                onChange={(e) => setCountryCode(e.target.value)}/>
            </div>

            <input type='submit' value='Save Bottle' className='btn btn-block'/>
        </form>
    )
}

export default AddBottle