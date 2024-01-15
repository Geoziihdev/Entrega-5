// Em components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <Link className="navbar-brand" to="/">Aeroaymo</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/destino">Destinos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/promocoes">Promoções</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contatos</Link>
                    </li>
                </ul>
                <form id="search-form">
                    <input type="text" id="search" placeholder="Buscar" />
                    <button type="submit">Pesquisar</button>
                </form>
                <div className="login-links">
                    <Link to="../html/cadastro.html" className="link-login-cadastro">Login</Link>
                    <Link to="../html/cadastro.html" className="link-login-cadastro">Cadastro</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;



