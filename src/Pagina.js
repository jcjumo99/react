
import React from 'react';
import Nav from "./componentes/Nav";
import ActionsMenu from './componentes/ActionsMenu';
import Tabla from './componentes/Tabla';

//import Modal from './componentes/Modal';

function Mascotas(){

    return(
        <>
        <div className="container-fluid">
          <Nav/>
          <ActionsMenu/>
          <Tabla/>
          
          
             
      </div>
    
 
  </>
  );
}

export default Mascotas;