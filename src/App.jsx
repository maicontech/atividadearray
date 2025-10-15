import { useState } from 'react';
import Lista from './components/Lista';
import './App.css';

function App() {
  const [itens, setItens] = useState([
    'Dfideliz', 'Daniel Caesar', 'Pluglip', 'Caio Ocean', 'Kiaz',
    'Nebrugg', 'Jaydes', 'Yunk Vino', 'CJota', '2ZDinizz'
  ]);
  const [novoItem, setNovoItem] = useState('');
  const [buscarItem, setBuscarItem] = useState('');

  // Adiciona um novo item na lista
  function adicionarItem() {
    const itemTrimmed = novoItem.trim();
    if (itemTrimmed !== '') {
      setItens([...itens, itemTrimmed]);
      setNovoItem('');
    }
  }

  // Remove um item pelo índice
  function excluirItem(index) {
    const novosItens = itens.filter((_, i) => i !== index);
    setItens(novosItens);
  }

  // Filtra itens com base no texto da busca (case-insensitive)
  const itensFiltrados = itens.filter(item =>
    item.toLowerCase().includes(buscarItem.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>Lista</h1>

      {/* Input para adicionar novo item */}
      <input
        type="text"
        placeholder="Digite um novo item"
        className='campo'
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') adicionarItem(); 
        }}
      />
      <button className='adicionar' onClick={adicionarItem}>Adicionar</button>

      {/* Input para buscar itens */}
      <input
        type="text"
        placeholder="Buscar item"
        className='campo'
        value={buscarItem}
        onChange={(e) => setBuscarItem(e.target.value)}
      />

      {/* Lista exibindo os itens filtrados */}
      <Lista itens={itensFiltrados} onExcluir={excluirItem} />
    </div>
  );
}

export default App;