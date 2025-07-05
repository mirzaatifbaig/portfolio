import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">My Portfolio</a>
        <div>
          <a href="#projects" className="px-3 hover:text-zinc-300">Projects</a>
          <a href="#about" className="px-3 hover:text-zinc-300">About</a>
          <a href="#contact" className="px-3 hover:text-zinc-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
