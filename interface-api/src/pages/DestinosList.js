// components/DestinosList.js
import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';
import '../styles/DestinosList.css';

const DestinosList = () => {
  const [destinos, setDestinos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [regiaoFiltro, setRegiaoFiltro] = useState(''); // Novo estado para a região
  const [precoMin, setPrecoMin] = useState(''); // Novo estado para o preço mínimo
  const [precoMax, setPrecoMax] = useState(''); // Novo estado para o preço máximo

  useEffect(() => {
    // Carregar a lista de destinos ao montar o componente
    ApiService.getDestinations()
      .then((data) => setDestinos(data))
      .catch((error) => console.error('Erro ao buscar destinos de viagens:', error));
  }, []);

  const filtrarDestinos = () => {
    let destinosFiltrados = destinos;

    // Filtrar por nome do destino
    destinosFiltrados = destinosFiltrados.filter(destino =>
      destino.name.toLowerCase().includes(filtro.toLowerCase())
    );

    // Filtrar por região
    if (regiaoFiltro) {
      destinosFiltrados = destinosFiltrados.filter(destino =>
        destino.regiao.toLowerCase().includes(regiaoFiltro.toLowerCase())
      );
    }

    // Filtrar por preço mínimo
    if (precoMin) {
      destinosFiltrados = destinosFiltrados.filter(destino =>
        destino.preco >= parseFloat(precoMin)
      );
    }

    // Filtrar por preço máximo
    if (precoMax) {
      destinosFiltrados = destinosFiltrados.filter(destino =>
        destino.preco <= parseFloat(precoMax)
      );
    }

    // Outros filtros podem ser adicionados conforme necessário

    // Atualizar o estado com os destinos filtrados
    setDestinos(destinosFiltrados);
  };

  return (
    <div className="destinos-list-container">
      <h2 className="destinos-list-title">Destinos de Viagens</h2>
      <input
        type="text"
        placeholder="Filtrar por destino..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filtrar por região..."
        value={regiaoFiltro}
        onChange={(e) => setRegiaoFiltro(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço mínimo"
        value={precoMin}
        onChange={(e) => setPrecoMin(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço máximo"
        value={precoMax}
        onChange={(e) => setPrecoMax(e.target.value)}
      />
      <button onClick={filtrarDestinos}>Filtrar</button>
      <ul className="destinos-list">
        {destinos && destinos.map((destino) => (
          <li key={destino.id} className="destino-item">
            {destino.name} - Região: {destino.regiao} - Preço: {destino.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinosList;
