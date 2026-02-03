import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    opacity: isActive ? 1 : 0.8,
    fontWeight: isActive ? 700 : 500,
  });

  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" style={linkStyle}>Blog</NavLink>
        <NavLink to="/sobre" style={linkStyle}>Sobre</NavLink>
        <NavLink to="/descricao" style={linkStyle}>Descrição</NavLink>
      </div>
    </nav>
  );
}
