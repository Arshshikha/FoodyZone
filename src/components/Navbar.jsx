import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useCart } from './ContextReducer'
import Modal from '../Modal'
import Cart from '../screens/Cart'
 import Badge from '@material-ui/core/Badge'
 import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export default function Navbar() {
  const [cartView, setCartView] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"))
  const navigate = useNavigate()
  const items = useCart()

  useEffect(() => {
    const checkLogin = () => setIsLoggedIn(!!localStorage.getItem("token"))
    window.addEventListener("storage", checkLogin)
    return () => window.removeEventListener("storage", checkLogin)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userEmail")
    setIsLoggedIn(false)
    navigate("/login")
  }

  const loadCart = () => {
    setCartView(true)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
        style={{ boxShadow: "0px 10px 20px black", position: "fixed", zIndex: "10", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">FoodyZone</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>
              </li>
              {isLoggedIn &&
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-3 active" to="/myorder">My Orders</Link>
                </li>
              }
            </ul>
            {!isLoggedIn ? (
              <form className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
              </form>
            ) : (
              <div className="d-flex align-items-center">
                <div className="btn bg-white text-success mx-2" onClick={loadCart}>
                  {/* <Badge color="secondary" badgeContent={items.length}><ShoppingCartIcon /></Badge> */}
                  Cart <span className="badge bg-danger">{items.length}</span>
                </div>
                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                <button onClick={handleLogout} className="btn bg-white text-success mx-2">Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}