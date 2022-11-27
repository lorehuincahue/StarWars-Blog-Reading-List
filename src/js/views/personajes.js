import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/carduno";

export function Personajes() {
  const {store, actions}= useContext(Context);
  useEffect(()=>{
 actions.getPersonajes();
  },[])
  return (
    <>
      <h1 className="firsttitle">Characters</h1>
      <div className="text-center mt-5 row">

        
        {store.personajeSW?.map((obj,index)=>{
          return <Card titulo={obj.name} urlboton={"/infopersonaje/"+ obj.uid} url={"https://starwars-visualguide.com/assets/img/characters/"+obj.uid+".jpg"}/>
        })}
			
{ console.log(store.personajeSW)}

        {/* <Card urlboton="/infopersonaje/1"/> 
        <Card urlboton="/infopersonaje/2" />
        <Card urlboton="/infopersonaje/3"/>
        <Card urlboton="/infopersonaje/4"/>
        <Card urlboton="/infopersonaje/5"/>
        <Card urlboton="/infopersonaje/6"/>
        <Card urlboton="/infopersonaje/7"/>
        <Card urlboton="/infopersonaje/8"/> */}

      </div>
    </>
  );
}