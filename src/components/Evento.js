import Button from './eventos/Button';

function Evento({numero})
{

    function meuEvento()
    {
        console.log(`Clicou`);
    }

    function segundoEvento()
    {
        console.log(`Clicou 2`);
    }
    return (
        <div>
            <p>Clique</p>
            <Button event={meuEvento} text= "Primeiro evento"/>
            <Button event={segundoEvento} text= "Segundo evento"/>
        </div>
    )
}

export default Evento