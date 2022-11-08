import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Card from "./components/Card/Card";

export default function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartPrice, setCartPrice] = React.useState(0);

  const onAddCart = (obj) => {
    const index = cartItems.findIndex((item) => item.id === obj.id);
    if (index === -1) {
      setCartItems([...cartItems, obj]);
      setCartPrice(cartPrice + parseInt(obj.price));
    } else {
      const newCartItems = cartItems;
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
      setCartPrice(cartPrice - parseInt(obj.price));
    }
  };

  const onCartOpen = () => {
    setIsCartOpen(true);
  };

  const onCartClose = () => {
    setIsCartOpen(false);
  };

  React.useEffect(() => {
    fetch("https://6363becf37f2167d6f8223de.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper">
      <Header onClickCart={onCartOpen} cartPrice={cartPrice} />
      <main className="sneakers__content">
        <div className="sneakers__head">
          <h1 className="sneakers__title">Всі кросівки</h1>
          <div className="sneakers__search">
            <img width={14} height={14} src="./img/search.svg" alt="search" />
            <input placeholder="Пошук..." />
          </div>
        </div>
        <div className="sneakers__list">
          {items.map((item) => (
            <Card key={item.id} data={item} onAddCart={onAddCart} />
          ))}
        </div>
      </main>
      {isCartOpen && (
        <Cart onClose={onCartClose} data={cartItems} cartPrice={cartPrice} />
      )}
    </div>
  );
}
