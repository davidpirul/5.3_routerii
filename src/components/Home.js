import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [name, setName] = useState("");
  const [pokemons, setPokemons] = useState([])
  const navigate = useNavigate();

  const irAPokemon = () => {
    navigate(`/pokemon/${name}`)
  };

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1154");
      const data = await resp.json();
      console.log(data)


      if (data && data.results) {
        const getName = data.results.map(({ name }) => ({ name }));
        setPokemons(getName)
        console.log(getName)
      }
    }
    getPokemons();
  }, []);


  return (
    <div className="container p-4 justify-content-center">
      <div>
        <select className="form-select form-select-lg" onChange={(e) => setName(e.target.value)}>
          <option value="">Seleciona tu pokemon favorito</option>
          {pokemons.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          ))}
        </select>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button type="button" className="btn btn-outline-danger m-3" onClick={irAPokemon}>VER DETALLES</button>
      </div>
      <div className="container d-grid gap-2 col-2 mx-auto">          
          <h4>This is a Pokedex</h4>
          <h6>MADE WITH REACT.JS</h6>
      </div>
    </div>

  )
}