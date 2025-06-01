import {useState, useEffect } from "react"

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { navLinks } from "../data/index.js"
import { navLinks2 } from "../data/index2.js"
import { NavLink, useNavigate } from "react-router-dom"

import logo from '../assets/img/logo-ml.svg'
import darklogo from '../assets/img/logo-ml-dark.svg'

import ship  from "../assets/vector/ship.svg";

const NavBarComponents = () => {
  const [changeColor, setChangeColor] = useState(false)
  const [expanded, setExpanded] = useState(false); //to collapse

  const navigate = useNavigate();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  };

  useEffect(() => {
    changeBackgroundColor();
   
    window.addEventListener('scroll', changeBackgroundColor);
    return () => window.removeEventListener('scroll', changeBackgroundColor);
  }, []);

  const handleNavLinkClick = (path) => {
    navigate(path);
    setExpanded(false); // Collapse the navbar after clicking a link
  };
 
  return (
    <div>
      <Navbar 
      expand="lg" 
      expanded={expanded} // Control navbar expansion
      onToggle={() => setExpanded(!expanded)} 
      fluid="md" 
      className={`fixed top-0 navbar-custom d-flex justify-content-center align-items-center ${changeColor ? "color-active" : ""}`}>

        <Container className="navbar-container d-flex justify-content-between align-items-center">

          {/* Left Nav */}
          <div className="navbar-side d-flex justify-content-center">
            <Navbar.Collapse id="basic-navbar-nav-left" className="d-flex justify-content-center">
              <Nav className="d-flex justify-content-center align-items-center">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link px-3 ${isActive ? "active" : ""}`
                    }
                    onClick={() => handleNavLinkClick(link.path)}
                    end
                  >
                    {link.text}
                  </NavLink>
                ))}
              </Nav>
            </Navbar.Collapse>
          </div>

          {/* Center Logo */}
          <Navbar.Brand
            href="/"
            className="navbar-center d-flex justify-content-center align-items-center"
          >
            <img
              src={changeColor ? darklogo : logo} // dynamically swap based on scroll
              alt="Logo Maggo"
              className="logo"
            /> 
          </Navbar.Brand>

          {/* Right Nav */}
          <div className="navbar-side d-flex justify-content-center">
            <Navbar.Collapse id="basic-navbar-nav-right" className="d-flex justify-content-center">
              <Nav className="d-flex justify-content-center align-items-center">
                {navLinks2.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link px-3 ${isActive ? "active" : ""}`
                    }
                    onClick={() => handleNavLinkClick(link.path)}
                    end
                  >
                    {link.text}
                  </NavLink>
                ))}
                <NavLink to="/login" className="tags d-flex align-items-center ms-2">
                  <div className="text-wrapper">Akun</div>
                  <img className="login-ship" alt="Foto blog" src={ship} />
                </NavLink>

              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>

      </Navbar>
    </div>
  );
}

export default NavBarComponents