import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/styles.css"

export default function Header() {
  let pokeball = "https://i.ibb.co/qrLkvQd/Pokebola-pokeball-png-2.png"

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'no-active');

  return (

    <div className="container-fluid">
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
          <img src={pokeball} alt="pokeball" width="30" height="30" className="d-inline-block align-top" />
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link">
                <NavLink className={setActiveClass} to='/home'>
                  <h3>Home</h3>
                </NavLink>
              </div>
            </li>
            <div className="nav-link">
              <li className="nav-item">
                <NavLink className={setActiveClass} to='/pokemon'>
                  <h3>Pokemons</h3>
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}