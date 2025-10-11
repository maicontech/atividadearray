import './App.css'
import Lista from './components/Lista'

function App(){

const meusItens =['', '', '']

return(
  <div className='App'>
    <h1>RENDERIZÇÃO DE LISTA</h1>
    <Lista itens = {meusItens}/>
     <Lista itens = {[]}/>
  </div>
)

}

export default App;