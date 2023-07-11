import React, { useState } from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as MenuIcon } from "./menu-icon.svg";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState();

  return (
    <header className="header">
      <Transition in={isOpen} timeout={300}>
        {(state) => (
          <nav className={`menu ${state}`}>
            <ul className="menu__list">
              <li className="menu__item">About Us</li>
              <li className="menu__item">Products</li>
              <li className="menu__item">Contacts</li>
            </ul>
          </nav>
        )}
      </Transition>
      <button className="menu-button" onClick={() => setOpen(!isOpen)}>
        <MenuIcon />
      </button>
    </header>
  );
}

export default App;
