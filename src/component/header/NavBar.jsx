import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router";
import { FiAlignJustify } from "react-icons/fi";
const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar bg-base-100 shadow-lg p-2 lg:px-16 py-4 sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/">
          <img src={logo} alt="skilllink Hire" className="w-20 h-auto" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="font-medium text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-medium text-sm">
              About Us
            </Link>
          </li>
          
          {/* <li>
            <details>
              <summary className="font-medium text-sm">Services</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>            <Link to="/services">Services</Link>
          </li>
          <li>
            
            <Link to="/blog" className="font-medium text-sm">
              Blogs
            </Link>
            
          </li>
          <li>
            <Link to="/contact" className="font-medium text-sm">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <FiAlignJustify className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" className={isActive('/') ? 'bg-[var(--color-blue)] text-white' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'bg-[var(--color-blue)] text-white' : ''}>About Us</Link>
            </li>
            <li>
              <Link to="/services" className={isActive('/services') ? 'bg-[var(--color-blue)] text-white' : ''}>Services</Link>
            </li>
            {/* <li>
                <Link to="/services">Services</Link>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <Link to="/blog" className={isActive('/blog') ? 'bg-[var(--color-blue)] text-white' : ''}>Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'bg-[var(--color-blue)] text-white' : ''}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <button onClick={() => {
          window.location.href = "tel:9074257171";
        }}
         className="btn bg-[var(--color-blue)] text-white font-light rounded-xl hidden md:block">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NavBar;
