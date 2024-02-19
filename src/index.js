import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <Header />
      <Menu />
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
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
    </main>
  );
}
