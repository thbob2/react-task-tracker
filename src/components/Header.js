import PropTypes from 'prop-types'
import Button from './Button'
import { FaMarker } from 'react-icons/fa'
import { FaRegTimesCircle } from 'react-icons/fa'
const Header = ({title, onAdd, showAdd}) => {
    
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd ? '#e53238' : '#2fb45a'} 
            text={showAdd ? <FaRegTimesCircle/> : <FaMarker />} onClick={onAdd} />
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes ={
    title: PropTypes.string.isRequired,
}


export default Header
