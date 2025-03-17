import React from "react";

function CardPizza({ desc, name, price, ingredients = [], img }) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </p>
        <p className="card-text">
          <strong>Precio:</strong>{" "}
          {price.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </p>
        {desc && (
          <h6 className="card-subtitle mb-2 text-muted collapse">{desc}</h6>
        )}
        <div className="d-flex justify-content-between">
          <button aria-controls="collapse-text" className="btn btn-primary">
            Ver más
          </button>
          <button className="btn btn-success">Añadir</button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
