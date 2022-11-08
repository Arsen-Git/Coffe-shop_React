import React from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Card from "./components/Card/Card";

export default function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartPrice, setCartPrice] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  const onAddCart = (obj) => {
    const index = cartItems.findIndex((item) => item.id === obj.id);
    if (index === -1) {
      axios.post("https://6363becf37f2167d6f8223de.mockapi.io/cart", obj);
      setCartItems([...cartItems, obj]);
      setCartPrice(cartPrice + parseInt(obj.price));
    }
  };

  const onDeleteCart = (obj) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== obj.id));
    setCartPrice(cartPrice - parseInt(obj.price));
    axios.delete(
      `https://6363becf37f2167d6f8223de.mockapi.io/cart/${obj.item}`
    );
  };

  const onCartOpen = () => {
    setIsCartOpen(true);
  };

  const onCartClose = () => {
    setIsCartOpen(false);
  };

  React.useEffect(() => {
    axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);
  React.useEffect(() => {
    axios
      .get("https://6363becf37f2167d6f8223de.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, [isCartOpen]);

  return (
    <div className="wrapper">
      <Header onClickCart={onCartOpen} cartPrice={cartPrice} />
      <main className="sneakers__content">
        <div className="sneakers__head">
          <h1 className="sneakers__title">
            {searchValue ? `Пошук за запитом: ${searchValue}` : "Всі кросівки"}
          </h1>
          <div className="sneakers__search">
            <img width={14} height={14} src="./img/search.svg" alt="search" />
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Пошук..."
            />
          </div>
        </div>
        <div className="sneakers__list">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card key={item.id} data={item} onAddCart={onAddCart} />
            ))}
        </div>
      </main>
      {isCartOpen && (
        <Cart
          onClose={onCartClose}
          data={cartItems}
          cartPrice={cartPrice}
          deleteItem={onDeleteCart}
        />
      )}
    </div>
  );
}
