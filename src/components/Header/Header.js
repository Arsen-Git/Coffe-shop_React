import React from "react";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__left">
        <img width={40} height={40} src="./img/sneakers__logo.svg" alt="logo" />
        <div className="header__left__logoContainer">
          <h2>REACT SNEAKERS</h2>
          <p>Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul className="header__right">
        <li className="header__right__cart">
          <img
            onClick={props.onClickCart}
            width={20}
            height={20}
            src="./img/cart.svg"
            alt="cart"
          />
          <p>{props.cartPrice} грн.</p>
        </li>
        <li className="header__right__favorite">
          <img
            width={20}
            height={20}
            src="./img/favourite.svg"
            alt="favourite"
          />
        </li>
        <li className="header__right__acc">
          <img width={20} height={20} src="./img/acc.svg" alt="acc" />
        </li>
      </ul>
    </header>
  );
}
