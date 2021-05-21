
import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Veterinaria</a>
    

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/index.html">Mascotas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/veterinaria.html">Veterinari@s</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/consultas.html">Consultas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/duenos.html">Dueños</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
</nav>
  ) ;
}
export default Nav;
