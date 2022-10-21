import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../stylesheets/pokecard.css"

export default function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [imagen, setImagen] = useState("")

  useEffect(() => {

    const getPokemon = async () => {

      try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const dataPokemon = await resp.json();
        setPokemon(dataPokemon)
        setImagen(dataPokemon.sprites.other.dream_world.front_default)
      } catch (err) { }
    }

    getPokemon()
  }, [name])

  return (
    <>
      <div className="container">
        <div className="titulo">
          <p key={pokemon.id}>#{pokemon.id}</p>
          <p key={pokemon.name}>{pokemon.name}</p>
        </div>

        <div className="description">
          <img key={pokemon.imagen} alt={pokemon.name} src={imagen}></img>
        </div>
        <div className="information">
          <div className="display">
            <h4>Height: </h4>
            <h4>{pokemon.height} m</h4>
          </div>
          <div className="display">
            <h4>Weight: </h4>
            <h4>{pokemon.weight} m</h4>
          </div>
          <div className="display">
            <h4>Experience:</h4>
            <h4>{pokemon.base_experience} m</h4>
          </div>
        </div>
      </div>

    </>
  );
}