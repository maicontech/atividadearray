
import { useState } from 'react';

function Condicional() {

  const [email, setEmail] = useState('');
  const [userEmail, setUserEmail] = useState('')

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email)
    console.log("Email enviado: ", email);
  }
  function limparEmail(){
    setUserEmail('')
  }

  return (
    <div>
      <h2>Cadastre seu email: </h2>
      <form>
        <input 
          type="email" 
          placeholder="Digite seu email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
        <button type="submit" onClick={enviarEmail}>Enviar </button>
        <button onClick={limparEmail}> limpar </button>
        {userEmail && (
            <div>
                <p>O email do usuario é: {userEmail}</p>
            </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;