import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const data = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const openHour = 10;
const closeHour = 22;
const isOpen = openHour <= closeHour ? true : false;
const pizzaData = data;

// console.log(data);

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header container">
      <h1>Heedrhiss Home of Pizzas</h1>
    </header>
  );
}

function Menu() {
  const pizzaData = data;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <div className="pizzas">
        {data.map((pizza) => (
          <Pizza
            name={pizza.name}
            desc={pizza.ingredients}
            photo={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div>
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <div>
        <img src={props.photo} alt="{props.alt}" />
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <h3>${props.price}</h3>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {isOpen ? (
        <p>{new Date().toLocaleTimeString()} We are currently Open...!</p>
      ) : (
        <p>
          Sorry we're currently closed, chech back at {openHour} or Order
          online...!
        </p>
      )}
      <button className="btn">Order</button>
    </footer>
  );
}
