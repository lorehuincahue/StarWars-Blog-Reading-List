import React,{useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export function InfoPlanetas(){
  const [comando,setComando] = useState(); 
  const {theid} =useParams();
  const {store, actions} = useContext(Context);
  useEffect (()=>{
    fetch("https://www.swapi.tech/api/planets/"+theid)
    .then(response => response.json())
    .then(result => {
      console.log(result.result)
      setComando(result.result.properties)})
    .catch(error => console.log('error', error));
  },[])
  return <>
  <h1 className="tinfo1">{comando?.name}</h1>
<table className="table table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Diameter</th>
      <th scope="col">Orbital</th>
      <th scope="col">Rotation</th>
      <th scope="col">Gravity</th>
      <th scope="col">Population</th>
      <th scope="col">Climate</th>
      <th scope="col">Terrain</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{comando?.diameter}</td>
      <td>{comando?.orbital_period}</td>
      <td>{comando?.rotation_period}</td>
      <td>{comando?.gravity}</td>
      <td>{comando?.population}</td>
      <td>{comando?.climate}</td>
      <td>{comando?.terrain}</td>
    </tr>
  
  </tbody>
</table>
  </>
}