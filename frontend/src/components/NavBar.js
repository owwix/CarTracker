import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="text-xl font-bold">Car Tracker</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`px-3 py-1 rounded ${isActive("/") ? "bg-gray-700 text-white" : "hover:text-gray-300"}`}
            >
              Home
            </Link>
            <Link 
              to="/records" 
              className={`px-3 py-1 rounded ${isActive("/records") ? "bg-gray-700 text-white" : "hover:text-gray-300"}`}
            >
              Records
            </Link>
            <Link 
              to="/managevehicles" 
              className={`px-3 py-1 rounded ${isActive("/managevehicles") ? "bg-gray-700 text-white" : "hover:text-gray-300"}`}
            >
              Manage Vehicles
            </Link>
            <Link 
              to="/account" 
              className={`px-3 py-1 rounded ${isActive("/account") ? "bg-gray-700 text-white" : "hover:text-gray-300"}`}
            >
              My Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <Link 
            to="/" 
            className={`block py-2 px-4 ${isActive("/") ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`}
          >
            Home
          </Link>
          <Link 
            to="/records" 
            className={`block py-2 px-4 ${isActive("/records") ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`}
          >
            Records
          </Link>
          <Link 
            to="/managevehicles" 
            className={`block py-2 px-4 ${isActive("/managevehicles") ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`}
          >
            Manage Vehicles
          </Link>
          <Link 
            to="/account" 
            className={`block py-2 px-4 ${isActive("/account") ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`}
          >
            My Account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
