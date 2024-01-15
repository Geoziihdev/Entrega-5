// Home.js
import React from 'react';
import Card from '../components/Card';
import imagemSalvador from '../imagens/pelourinho-salvador-bahia.png';
import imagemGramado from '../imagens/Gramado.jpg';
import imagemRio from '../imagens/cristo-redentor-desportivo-butanta3.jpg';
import imagemSp from '../imagens/sp.png';

const Home = () => {
  return (
    <div className="container">
      <div className="card-container">
        <Card
          title="Salvador"
          content="Explore as cores vibrantes do Pelourinho, mergulhe na cultura rica e saboreie a culinária única de Salvador, onde cada esquina conta uma história fascinante."
          imagemSrc={imagemSalvador}
        />
        <Card
          title="Gramado"
          content="Embrace a magia das serras gaúchas em Gramado, onde o charme europeu se funde com a natureza exuberante. Descubra paisagens encantadoras e experiências aconchegantes nesta joia do sul do Brasil."
          imagemSrc={imagemGramado}
        />
        <Card
          title="Rio De Janeiro"
          content="Sinta a batida do samba e a energia contagiante do Rio de Janeiro, onde cada esquina é um convite para dançar."
          imagemSrc={imagemRio}
        />
        <Card
          title="São Paulo"
          content="Explore a diversidade cultural de São Paulo, a cidade que nunca dorme, onde a arte, gastronomia e inovação se entrelaçam."
          imagemSrc={imagemSp}
        />
        {/* Adicione mais cards conforme necessário */}
      </div>
    </div>
  );
};

export default Home;
