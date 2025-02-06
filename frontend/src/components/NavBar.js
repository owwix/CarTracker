import { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import { Menu, X } from "lucide-react"; // For menu icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold">Car Tracker</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/records" className="hover:text-gray-300">Records</Link>
            <Link to="/managevehicles" className="hover:text-gray-300">Manage Vehicles</Link>
            <Link to="/account" className="hover:text-gray-300">My Account</Link>
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
        <div className="md:hidden bg-blue-700">
          <Link to="/" className="block py-2 px-4 hover:bg-blue-800">Home</Link>
          <Link to="/records" className="block py-2 px-4 hover:bg-blue-800">Records</Link>
          <Link to="/managevehicles" className="block py-2 px-4 hover:bg-blue-800">Manage Vehicles</Link>
          <Link to="/account" className="block py-2 px-4 hover:bg-blue-800">My Account</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;