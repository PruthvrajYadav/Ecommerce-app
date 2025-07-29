import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg active bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='' className="navbar-brand">
              🛒 Ecommerce App</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page" >Home</Link>
              </li>

              <li className="nav-item">
                <Link to='/category' className="nav-link " aria-current="page" >Category</Link>
              </li>
              <li className="nav-item">
                <Link to='/register' className="nav-link" >Register</Link>
              </li>
              <li className="nav-item">
                <Link to='/login' className="nav-link" >Login</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart' className="nav-link" >Cart</Link>
              </li>

            </ul >
          </div>
        </div >
      </nav >

    </>
  )
}

export default Header