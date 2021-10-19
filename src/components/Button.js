import PropTypes from 'prop-types';

const Button = ({color,text,onClick }) => {

    return (
        <button
            onClick={onClick}
            style={{ backgroundColor:color }} 
            className="btn"
        >
            {text}
        </button>
    )
}
Button.defaultProps = {
    text : 'button',
    color: '#444857'
}
Button.propTypes = {
    
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
