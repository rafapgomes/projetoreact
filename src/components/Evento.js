import Button from './eventos/Button';

function Evento({numero})
{

    function meuEvento()
    {
        console.log(`Clicou`);
    }
    return (
        <div>
            <p>Clique</p>
            <Button event={meuEvento} text= "Primeiro evento"/>
        </div>
    )
}

export default Evento