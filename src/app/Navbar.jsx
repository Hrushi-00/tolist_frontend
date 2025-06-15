import React, { useState } from "react";
import logo from "../../src/Image/logo.png";
import SimpleFormModal from "./UserFormModal";
const navLinks = [
  
  { id: "about", title: "AboutUs" },
  { id: "features", title: "Features" },
  { id: "more", title: "More Option" },
  { id: "contact", title: "Contact" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 const handleOpenModal = () => {
    setIsModalOpen(true);
  };
   const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-3  flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FF3E54]">
        
          <img src={logo} alt="Logo" className="h-20 w-20 inline-block mr-2" />
         
        </div>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-700 hover:text-[#FF3E54] font-medium transition"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

     
          <div className="flex gap-4 ml-6">
            <button className="px-4 py-2 border border-[#FF3E54] text-[#FF3E54] rounded hover:bg-[#FF3E54] hover:text-white transition">
              Login
            </button>
            <button onClick={handleOpenModal} className="px-4 py-2 bg-[#FF3E54] text-white rounded hover:bg-[#e63247] transition">
              Signup
            </button>
          </div>
        </div>

        {/*for mob */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* for Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          <ul className="flex flex-col gap-4 mb-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-[#FF3E54] font-medium block transition"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

       {/* login button */}
          <div className="flex flex-col gap-3">
            <button className="w-full px-4 py-2 border border-[#FF3E54] text-[#FF3E54] rounded hover:bg-[#FF3E54] hover:text-white transition">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-[#FF3E54] text-white rounded hover:bg-[#e63247] transition">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
     {isModalOpen && (
        <SimpleFormModal onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Navbar;
