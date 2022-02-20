import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Characters.css";
// import CharacterDetail from '../characterDetails/CharacterDetail'

function Characters() {
  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */
  const [isLoading, setisLoading] = useState(true);
  const [state, setState] = useState([])
  const [character, setCharacter] = useState('')

  useEffect(()=>{
    fetch(`https://www.breakingbadapi.com/api/characters?name=`)
    .then(data=>data.json())
    .then(info=>{
      setState(info)
      setisLoading(false)
    })
  },[]);

  function onSearch(character){
    fetch(`https://www.breakingbadapi.com/api/characters?name=${character}`)
    .then((data)=>data.json())
    .then(info=>{
      setState(info);
      setisLoading(false)
    })
  }

  return (
    <div className="Characters">
      <h1>List of Characters</h1>

      {/*
        Aquí vamos a definir el buscador de personajes.
        Debemos crear una SearchBar que contenga un form controlado
      */}

      <form onSubmit={(e)=>{
        e.preventDefault();
        onSearch(character);
        setCharacter('');
      }}>
        <input
          type= 'text'
          placeholder='Find character'
          value={character}
          onChange= {e => setCharacter(e.target.value)}
          />
        <input type="submit" value="Find"/>
        <hr />
      </form>

      <ul className="Characters__list">
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
         {isLoading ? ( 
           <Spinner />
        ) :
          state.map(c=>{
            return(
              <Link key= {c.char_id} to={`/characters/${c.char_id}`}>
                <p  key= {c.char_id}> {c.name}</p>
              </Link>
            )
          })
         }
      </ul>
    </div>
  );
}

export default Characters;
