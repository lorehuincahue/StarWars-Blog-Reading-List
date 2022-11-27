import React from "react";
import { Card } from "../component/carduno";

export function Principal() {
  return (
    <>
      <h1 className="firsttitle">Categoría de información</h1>
      <div className="containerprincipal">
        <div className="row">
          <Card
            url="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2019/11/planetas_fallen_order.jpg?w=1280&ssl=1"
            titulo="Planets"
            descripcion="Aca encontraras los planetas de la saga"
            botoncillo="A viajar!"
            urlboton="/planetas"
          />
          <Card
            url="https://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_1944x.jpg?v=1616087475"
            titulo="Characters"
            descripcion="Aca podras conocer a los personajes de la saga"
            botoncillo="A viajar!"
            urlboton="/personajes"
          />
        </div>
      </div>
    </>
  );
}