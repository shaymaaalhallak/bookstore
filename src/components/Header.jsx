import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const cart = useCart() || []
  const totalQty = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <header className="bg-white shadow-sm sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container container-max">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span style={{fontSize: '1.2rem'}}>📚</span>
            <span className="ms-2 fw-bold">Bound & Beyond</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <NavLink to="/" end className={({isActive})=> "nav-link " + (isActive? 'active fw-semibold':'text-muted')}>Home</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/about" className={({isActive})=> "nav-link " + (isActive? 'active fw-semibold':'text-muted')}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({isActive})=> "nav-link " + (isActive? 'active fw-semibold':'text-muted')}>Contact</NavLink>
              </li>
                <li className="nav-item">
                <NavLink to="/browse" className={({isActive})=> "nav-link " + (isActive? 'active fw-semibold':'text-muted')}>Browse</NavLink>
              </li>
             <li className="nav-item ms-3">
 <li className="nav-item ms-3">
  <Link
    to="/cart"
    className="d-flex align-items-center justify-content-center"
    style={{
      backgroundColor: '#000',      // black
      color: '#fff',                // text white
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      textDecoration: 'none',
      transition: 'background-color 0.3s, transform 0.2s',
      border: '1px solid #333',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = '#222'; // slightly lighter black
      e.currentTarget.style.transform = 'scale(1.05)'; // subtle zoom
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = '#000';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    Cart
    <span
      style={{
        backgroundColor: '#56647a',   // red badge for quantity
        color: '#fff',
        borderRadius: '50%',
        padding: '0.25rem 0.6rem',
        marginLeft: '0.5rem',
        fontSize: '0.8rem',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {totalQty}
    </span>
  </Link>
</li>

</li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
