function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log("Usuario cadastrado")
    }
    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div>
                    <input type="submit" value="Enter" />
                </div>
            </form>

        </div>

    )

}


export default Form