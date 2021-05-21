
import React, {useState}from 'react';
import   './ActionsMenu.css'
import Alert from '../Alert'


function ActionsMenu(){
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const AlertSwitch = () => setMostrarAlerta(!mostrarAlerta);
    return(
        <div className="actions-menu">
    <h1>Mascotas</h1>
    <div className="actions-menu-content">
      
      
    <button type="button" className="btn btn-primary" 
    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
    onClick={AlertSwitch}
    >
        Nueva 
        
      </button>

      {mostrarAlerta && < Alert AlertSwitch={AlertSwitch}/>}
      
      
    </div>
  </div>
    )
}
export default ActionsMenu;