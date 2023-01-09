import PropTypes from "prop-types";


Item.propTypes = {
    marca: PropTypes.string,
    lancamento: PropTypes.number
}
function Item({marca,lancamento})
{
    return(
        <>
        <li>{marca} - {lancamento}</li>
        </>
    )
}

export default Item;