//Custom component that was created to be resused. The Children Prop is 
//there so that anything that is within card will be rendered within the card

import PropTypes from 'prop-types';


const Card = ({children, reverse}) => {
    // return (
    //     <div className={`card ${reverse && 'reverse'}`}>
    //         {children}

    //     </div>
    // )

    return (
    <div 
        className="card"
        style={{
            backgroundColor: reverse ? 'rgba(0, 0, 0, 0.5)' : '#fff',
            textColor: reverse ? '#fff' : '#000',
        }}
    >
        {children}
    </div>
    )
}


Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card