import PropTypes from 'prop-types'

const Header = ({name}) => {
  return (
    <header>
        <div className='container'>
            <h1>{name}</h1>
        </div>
    </header>
  )
}

export default Header


Header.defaultProps = {
    name: 'Guest'
}

Header.propTypes = {
    name: PropTypes.string
}
