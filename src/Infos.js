import React from 'react';
import { Link } from 'react-router-dom'

export default function Usuario(){
    return(
        <div>
           <nav>
                <ul>
                    <li>
                    <Link to='/'>Retornar a página inicial</Link>
                    </li>
                    <li>
                    <Link to='/dados'>Ir para Informações Pessoais</Link>
                    </li>
                    <li>
                    <Link to='/perfil'>Perfil</Link>
                    </li>
                </ul>
           </nav>

            <h1>Contatos</h1>
            <p> 
                <p>Idade: 33 anos</p>
                <p>Nome da mãe: Maria</p>
                <p>Nome do Pai: Antonio</p>
                <p>CPF: XXX.XXX.XXX-XX</p>
                <p>Endereço: Avenida Teste 123</p>
                <p>Ocupação: Dentista</p>
            </p>
        </div>
    );
}