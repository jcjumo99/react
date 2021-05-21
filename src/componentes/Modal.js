import React from 'react';


function Modal (){
    return(
        <div classNameName="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Nueva Mascota</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            
     <div className="modal-body">
              <form id="form">
              <input type="hidden" id="indice"/>
              <div className="form-floating">
                <select className="form-select" id="tipo" aria-label="Floating label select example">
                  
                  <option >Tipo De Animal</option>
                  <option >Perro</option>
                  <option >gato</option>
                  <option >ave</option>
                  <option >otro</option>
                </select>
             
              </div>
                <div className="form-floating mb-3">
                    <input type="text" name="nombre" className="form-control" id="nombre" placeholder="nombre" />
                    
                    <div className="form-floating">
                      <select className="form-select" id="dueno" aria-label="Floating label select example">
                        
                        <option >dueños</option>
                        <option >yasury</option>
                        <option >yareli</option>
                        <option >misuky</option>
                      </select>
                      
                    </div>
                </div>
         </form>
        </div>
            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
               id="cerrar">Cerrar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="btn-guardar">crear</button>
            </div>
          </div>
          </div>
          </div>

    )
}

export default Modal ;