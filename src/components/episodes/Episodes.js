import React, { useEffect, useState } from "react";
import "./Episodes.css";

function Episodes() {

  // const [isLoading, setisLoading] = useState(true);
  const [state, setState] = useState([])

  useEffect (()=>{
    fetch('https://www.breakingbadapi.com/api/episodes')
    .then((data)=>data.json())
    .then(info=>{
      setState(info);
      // setisLoading(false)
    })
  },[])

  

  let index =0;
  let index2=0;
  return (
    <div className="Episodes">
      <h1>Episodes List</h1>
      <ul className="Episodes__list">
        {
        state.map(e=>{
          if (parseInt(e.season) !== index && e.series === 'Breaking Bad'){
            index++;
            return(
              <div>
                <hr></hr>
                <h2 key={e.episode_id}>{e.series} - Season: {e.season}</h2>
                <hr></hr>
                <p key={e.episode_id}>Episode {e.episode}: {e.title}</p>
              </div>
            );
          } else if(parseInt(e.season) !== index2 && e.series === 'Better Call Saul'){
              index2++;
              return(
              <div>
                <hr></hr>
                <h2 key={e.episode_id}>{e.series} - Season: {e.season}</h2>
                <hr></hr>
                <p key={e.episode_id}>Episode {e.episode}: {e.title}</p>
              </div>
            );
          }else{
            return(
              <div>
              <p key={e.episode_id}>Episode {e.episode}: {e.title}</p>
              </div>
            )
          }
        })}
      </ul>
    </div>
  );
}

export default Episodes;
