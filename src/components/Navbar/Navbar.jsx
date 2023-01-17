import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-edit">
        <div className="container-fluid">
         
         
        <NavLink to="/" className="navbar-brand text-light" >Sion Computación</NavLink>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
             
              <li className="nav-item">
              <NavLink to="/"className="nav-link active" aria-current="page">Inicio </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul class="dropdown-menu">
                  <li><NavLink to="/category/a" className="nav-link active text-dark" aria-current="page">Componentes</NavLink></li>
                  <li><NavLink to="/category/b" className="nav-link active text-dark" aria-current="page">Computadoras</NavLink></li>
                  
                </ul>
              </li>
              
              <li className="nav-item">
              <NavLink to="/about" className="nav-link">Sobre Nosotros </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
        <CartWidget/>
      </nav>
    );
}

export default Navbar;