function Evento({numero}){

    function meuEvento(){
        console.log(`Ops..Fui ativado!! ${numero}`)
    }

    return(
        <>
        <p>Clique para ativar o evento</p>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento