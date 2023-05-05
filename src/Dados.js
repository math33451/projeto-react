import React from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';

export default function Dados (){
    const location = useLocation();
    const history = useHistory();
    const { id } = useParams();
    return (
        <div>
            <h1>identificador: {id} </h1>
            <h1>Path: {location.pathname}</h1>
            <Link to='/'>retornar a página inicial</Link>
        </div>
    );
}