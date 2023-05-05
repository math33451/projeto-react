import React from 'react';
import { Link } from 'react-router-dom'

export default function Perfil(){
    return(
        <div>
            <h1>Home</h1>
            <Link to='/'>Retornar a página inicial</Link>

            <h1>Sobre</h1>
            <Link to='/infos'>Ir para Informações</Link>

            <h1>Informações</h1>
            <Link to='/dados'>Ir para Informações Pessoais</Link>
        </div>
    );
}