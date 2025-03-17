import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./assets/js/pizzas";

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Nuestras Pizzas</h1>
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza
                desc={pizza.desc}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
