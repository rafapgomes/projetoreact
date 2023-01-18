import { useState } from 'react'


function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Usuario cadastrado com o nome ${name} e senha ${password}`)
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)} />

                </div>
                <div>
                    <label htmlFor="name">Senha:</label>
                    <input type="text" placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Enter" />
                </div>
            </form>

        </div>

    )

}


export default Form