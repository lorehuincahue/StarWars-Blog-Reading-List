import React,{useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export function InfoPersonajes(){
    const [datos,setDatos] = useState();  
    const {theid} =useParams();
    const {store, actions} = useContext(Context);
    useEffect(()=>{
      fetch("https://www.swapi.tech/api/people/"+theid )
      .then(response => response.json())
      .then(result => {
        console.log(result.result)
        setDatos(result.result.properties)})
      .catch(error => console.log('error', error));
    },[])
    return <>
    <h1 className="tinfo1">{datos?.name}</h1>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Height</th>
      <th scope="col">Mass</th>
      <th scope="col">Hair color</th>
      <th scope="col">Skin color</th>
      <th scope="col">Eyecolor</th>
      <th scope="col">Birth year</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{datos?.height} cm</td>
      <td>{datos?.mass} Kg</td>
      <td>{datos?.hair_color}</td>
      <td>{datos?.skin_color}</td>
      <td>{datos?.eye_color}</td>
      <td>{datos?.birth_year}</td>
      <td>{datos?.gender}</td>
    </tr>
  
  </tbody>
</table>
    {/* <h1>hola hola {store.personajeSW[theid]?.gender} </h1> */}
    </>
}