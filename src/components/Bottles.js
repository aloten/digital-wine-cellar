import Bottle from './Bottle'


const Bottles = ({ bottles, onDelete }) => {
    return (
        <>
            {bottles.map((bottle) => (
                <Bottle key={bottle.id} bottle={bottle} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Bottles