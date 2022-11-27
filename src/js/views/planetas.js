import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/carduno";

export function Planetas() {
  const {store, actions}= useContext(Context);
  useEffect(()=>{
    actions.getPlanetas();
     },[])
  return (
    <>
      <h1 className="firsttitle">Planets</h1>
      <div className="text-center mt-5 row">

      {store.planetasSW?.map((obj,index)=>{
          return <Card titulo={obj.name} urlboton={"/infoplaneta/"+obj.uid} url={"https://starwars-visualguide.com/assets/img/planets/"+obj.uid+".jpg"} botoncillo="Go inside!"/>
        })}


        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  );
}