import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import Spinner from "../Spinner";

function Home() {
  /*
  PISTA: podemos usar el hook useEffect para llamar a la api. 
  Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
  */
  const [isLoading, setisLoading] = useState(true);
  const [state, setState] = useState([])

  useEffect (()=>{
    fetch('https://www.breakingbadapi.com/api/quote/random')
    .then((data)=>data.json())
    .then(info=>{
      setState(info[0]);
      setisLoading(false)
    })
  },[])


  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      <div>
        {isLoading? (
          <Spinner/>
            ):(
          <div>
          <h1>{state.quote}</h1>
          <h2>By: {state.author}</h2>
          </div>
          )
            } 
      </div>
    </div>
  );
}

export default Home;
