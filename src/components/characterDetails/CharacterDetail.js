import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Spinner from '../Spinner';
import "./CharacterDetail.css";

function CharacterDetail() {
  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */
  const [character, setCharacter] = useState([]);
  const params = useParams();
  const [isLoading, setisLoading]= useState(true);

  useEffect(()=>{
    fetch(`https://www.breakingbadapi.com/api/characters/${params.id}`)
    .then(r=>r.json())
    .then(info=>{
      setCharacter(info[0])
      setisLoading(false)
    })
  },[params.id]);
  
  return (
    <div>
      {isLoading?(
        <Spinner/>
      ):
      (<div key={character.key} className="CharacterDetail">
        <h1 key={character.key}>{character.name}</h1>
        <p key={character.key}>Nickname: {character.nickname}</p>
        <p key={character.key}>Protagonist: {character.portrayed}</p>
        <p key={character.key}>Status: {character.status}</p>
        <p key={character.key}>Occupation: {character.occupation.join(' - ')}</p>{/*como corno hago? facil hay que preguntarle a jona*/}
        <p key={character.key}>Appearance: {character.appearance.join(' - ')}</p>
        <img key={character.key} className="CharacterDetail__Photo" src={character.img} alt="Img not found"/>
      </div>)
      }
    </div>
  );
}

export default CharacterDetail;
