import Item from './Item'
function List()
{
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Volks" lancamento={1980}/>
                <Item marca="AAAA" lancamento="sasa"/>
                
            </ul>
        </>
    )
}

export default List