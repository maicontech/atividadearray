
 function Lista({ itens, onExcluir }) {
  if (itens.length === 0) return <p>Nenhum item encontrado.</p>;

  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onExcluir(index)}>
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Lista;