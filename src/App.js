import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Dados from './Dados';
import Perfil from './Perfil';
import Infos from './Infos'


export default function App() {
   return (
       <>
     <header>
     <p><Link to='/home'>Home</Link></p>
     <p> <Link to='/dados'>Dados</Link></p>
     <p><Link to='/perfil'>Perfil</Link></p>
     <p><Link to= '/infos'>Informações Gerais</Link></p>

     </header>
     <main>
         <Switch>
           <Route path='/perfil' component= {Perfil}/>
           <Route path='/dados/:id?' component= {Dados}/>
           <Route path='/home' component= {Home}/>
           <Route path= '/infos' component= {Infos}/>
         </Switch>
       </main></>
   );
}