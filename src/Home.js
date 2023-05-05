import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to='/dados'>Dados</Link>
          </li>
          <li>
            <Link to='/perfil'>Perfil</Link>
          </li>
          <li>
          <Link to= '/infos'>Informações Pessoais</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;