
import React,{useState} from 'react';

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
console.log(numbers);

function Tabla(){
 // const [mascotas, setMascotas] = useState([
    const mascotas = [
      {
        tipo: "gato",
        nombre: "manchas",
        dueno: "esteban",
      },
      {
        tipo: "gataa",
        nombre: "manchasss",
        dueno: "estebanss",
      }
    ];
 
    return(
       //<div className="container">
        <table className="table  table-hover">
          <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo de Mascota</th>
                <th scope="col">Dueños</th>
                <th scope="col"></th>
              </tr>
          </thead>
              <tbody id="lista-mascotas">
                {mascotas.map( (mascota, index) => (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{mascota.nombre}</td>
                    <td>{mascota.tipo}</td>
                    <td>{mascota.dueno}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example"> 
                        <button type="button" className="btn btn-danger eliminar">
                          <i className="fas fa-trash-alt"></i></button>
                        <button type="button" className="btn btn-info editar" 
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          <i className="fas fa-pencil-alt"></i></button>
                      </div>
                  </td>
                </tr>
                ))}         
          </tbody>
        </table>)
}
//console.log(mascotas);
 
export default Tabla;