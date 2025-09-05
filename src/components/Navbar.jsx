import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          FlowSync
        </Link>

        {/* Ações (desktop) */}
        <div className="hidden md:flex gap-4">
          <button className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-600 transition">
            Entrar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Iniciar Teste Grátis
          </button>
        </div>

        {/* Menu mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Dropdown mobile */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          {/* <Link to="/about" className="block hover:text-blue-600">
            Sobre
          </Link>
          <Link to="/pricing" className="block hover:text-blue-600">
            Preços
          </Link>
          <Link to="/contact" className="block hover:text-blue-600">
            Contato
          </Link> */}
          <hr />
          <button className="w-full py-2 text-gray-700 font-medium hover:text-blue-600">
            Entrar
          </button>
          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Iniciar Teste Grátis
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
