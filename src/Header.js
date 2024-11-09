import React from 'react';
import { Link } from 'react-router-dom';
import logo from './w.png';
import './Header.css';

function Header() {
  return (
    <header 
      className="App-header" 
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#000', color: '#fff' }}
    >
      <div 
        className="logo-container" 
        style={{ flex: '0 1 auto' }}
      >
        <img 
          src={logo} 
          alt="Esojas Logo" 
          style={{ height: '60px', marginRight: '10px' }} 
        />
      </div>
      <div 
        className="header-content" 
        style={{ flex: '1 1 auto', textAlign: 'center' }}
      >
        <h1 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>Welcome to Esojas Consulting Services</h1>
        <p style={{ margin: '0', fontSize: '14px', color: '#fff' }}>
          Address: ESOJAS RS LLC, Parsippany, NJ
        </p>
        <p style={{ margin: '0', fontSize: '14px', color: '#fff' }}>
          Email: Mchavanpatil9@gmail.com
        </p>
      </div>
      <div className="button-container" style={{ flex: '0 1 auto', display: 'flex', gap: '10px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '8px 16px', fontSize: '14px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Home
          </button>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '8px 16px', fontSize: '14px', backgroundColor: '#fff', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Portfolio
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
