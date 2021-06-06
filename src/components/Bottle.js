import { FaTimes } from 'react-icons/fa'

const Bottle = ({ bottle, onDelete }) => {
    return (
        <div className='bottle'>
            <h3>
                {bottle.product} <FaTimes style={{ color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(bottle.id)}/>
            </h3>
            <p>{bottle.countryCode}</p>
        </div>
    )
}

export default Bottle