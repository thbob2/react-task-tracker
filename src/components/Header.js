import PropTypes from 'prop-types'
import Button from './Button'
import { FaMarker } from 'react-icons/fa'
import { FaRegTimesCircle } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
const Header = ({title, onAdd, showAdd}) => {
    
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' && (<Button 
            color={showAdd ? '#e53238' : '#2fb45a'} 
            text={showAdd 
                    ? <FaRegTimesCircle/> 
                    : <FaMarker />
                } 
            onClick={onAdd} />
            )
            }
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
