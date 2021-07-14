import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from  'react';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonRender, setPokemonRender] = useState([]);

  useEffect( () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=807")
    .then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
        setPokemon(response.results)
    }).catch(err=>{
        console.log(err);
    });
  }, [])

  const onClick = e => {
    console.log(pokemon);
    setPokemonRender([...pokemon]);
  }

  return (
    <div className="App">
      <button name="fetchPokemon" onClick={onClick}> Fetch Pokemon</button>
      {
        pokemonRender.map((poke,idx) => {
          return <p key={idx}>{poke.name}</p>
        })
      }
    </div>
  );
}


export default App;
