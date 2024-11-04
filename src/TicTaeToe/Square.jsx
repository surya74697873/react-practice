import PropTypes from "prop-types";

const Square = ({value, onSquareClick}) => {

    return (
        <button className="square" onClick={onSquareClick} style={{height : '50px', width : '50px' , fontWeight : 'bold'}}>{value}</button>
    );
}

Square.propTypes = {
    value : PropTypes.string.isRequired,
    onSquareClick : PropTypes.func.isRequired
}

export default Square;
