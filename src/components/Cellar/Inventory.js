import Button from '../Bottles/Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <Button color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add Bottle'}
            onClick={onAdd}/>
        </header>
    )
}

export default Header