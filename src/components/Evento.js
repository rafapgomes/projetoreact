function Evento({numero})
{

    function meuEvento()
    {
        console.log(`Clicou ${numero}`);
    }
    return (
        <div>
            <p>Clique</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento