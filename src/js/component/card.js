import React from "react";
import { Link } from "react-router-dom";


export function Card(props){
 return (
    <div className="card m-5 bg-dark text-white" style={{width: "18rem"}}>
  <img src={props.url} style={{height: "170px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.descripcion}</p>
    <Link to = {props.urlboton}>
    <a className="btn btn-primary">{props.botoncillo}</a>
    </Link> 
  </div>
</div>
 );
}