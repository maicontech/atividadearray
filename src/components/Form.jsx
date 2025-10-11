
import React, { useState } from 'react';

function Form (){
    
    function cadastrarUsuario(event){
            event.preventDefault()
        console.log(`Usuário ${name} foi cadastrado comm a senha: ${password}`)
        console.log("Cadastrou Usuário")
    }

    const [name,  setName] = useState ()
    const [password,  setPassword] = useState ()


    return(
        <div className='container'>
            <h2>Login</h2>
            <form onSubmit={cadastrarUsuario} className='form'>
                <div>
                    <label className='label' htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome"  className='input' 
                    onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <label className='label' htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua Senha " className='input'
                     onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>
                    <input className='botão' type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form