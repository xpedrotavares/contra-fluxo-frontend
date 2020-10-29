import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavbarComponent(props) {
    return(
        
        
<Navbar bg="light" expand="lg">
<Link to="/"><img className="logo ml-5" src={logo} alt="logo"/></Link>    
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="w-100 d-flex justify-content-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Sobre nós</Nav.Link>
      <Nav.Link href="#link">Artes</Nav.Link>
      <Nav.Link href="#link">Login</Nav.Link>
      <Nav.Link href="#link">Carrinho aqui</Nav.Link>
      <Nav.Link href="#link">Cadastre-se</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

            // <nav className="navbar navbar-light bg-light pr-5 pl-5 ">
            //   <Link to="/"><img className="logo ml-5" src={logo} alt="logo"/></Link>    
            //    <ul className="nav justify-content-end">
            //         <li className="navbar-home mr-4 nav-item">
            //         <Link className="navbar-brand menu-item" to="/">Home</Link>

            //         </li>
            //         <li className="nav-item mr-4">
            //         <Link className="navbar-brand menu-item" to="#">Sobre nós</Link>
            //         </li>
            //         <li className="nav-item mr-4">
            //         <Link className="navbar-brand menu-item" to="/product-all">Artes</Link>
            //         </li>
            //         <li className="nav-item mr-4">
            //         <Link className="navbar-brand menu-item" to="/login">Login</Link>
            //         </li>
            //         <li className="nav-item mr-4">
            //         {props.user._id ? (<div><Link className="navbar-brand menu-item" to="/profile">Perfil</Link></div>) : null}
            //         </li>
            //         <li className="nav-item mr-4">
            //         <Link className="navbar-brand menu-item" to="/cart"><i className="fas fa-cart-plus"></i></Link>
            //         </li>
            //         <li className="nav-item mr-5">
            //           <div className="navbar-link">
            //           {props.user._id ? (<div className="navbar-logout"><Link className="nav-text-logout navbar-brand menu-item" to="/logout">Logout</Link></div>) : <Link className="navbar-brand ml-3" to="/signup">Cadastre-se</Link>}

            //             </div>
            //         </li>
            //    </ul>
            // </nav>
       
    );
}

export default NavbarComponent;