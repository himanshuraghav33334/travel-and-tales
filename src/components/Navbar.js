import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

// ... (your existing imports)

class Navbar extends Component {
  state = { clicked: false, hasCookie: false };

  componentDidMount() {
    // Check if the cookie exists
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.setState({ hasCookie: !!token });
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const homeButton = this.state.hasCookie ? (
      <li>
        <Link className="nav-links" to="/index">
          <i className="fa-solid fa-house"></i>Home
        </Link>
      </li>
    ) : (
      <li>
        <Link className="nav-links" to="/">
          <i className="fa-solid fa-house"></i>Home
        </Link>
      </li>
    );

    return (
      <nav className="NavbarItems" onClick={this.handleClick}>
        <h1 className="navbar-logo">Travels and Tales</h1>
        <div className="menu-icons">
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {homeButton}
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}

          {/* Conditionally render the Login button */}
          
         <li> {!this.state.hasCookie && (
            <Link className="nav-links" to='/login'>
              <i class="bi bi-door-open-fill"></i>Login
            </Link>
          )}
          </li>
          
        </ul>
      </nav>
    );
  }
}

export default Navbar;

