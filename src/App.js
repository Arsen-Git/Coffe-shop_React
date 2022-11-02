export default function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img
            width={40}
            height={40}
            src="./img/sneakers__logo.svg"
            alt="logo"
          />
          <div className="header__left__logoContainer">
            <h2>REACT SNEAKERS</h2>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="header__right">
          <li className="header__right__cart">
            <img width={20} height={20} src="./img/cart.svg" alt="cart" />
            <p>1205 грн.</p>
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
      <main className="sneakers__content">
        <div className="sneakers__head">
          <h1 className="sneakers__title">Всі кросівки</h1>
          <div className="sneakers__search">
            <img width={14} height={14} src="./img/search.svg" alt="search" />
            <input placeholder="Пошук..." />
          </div>
        </div>
        <div className="sneakers__list">
          <div className="sneakers">
            <img
              width={32}
              height={32}
              className="sneakers__favourite"
              src="./img/sneakers__fav.svg"
              alt="favorite"
            />
            <img
              className="sneakers__img"
              src="./img/sneakers1.jpg"
              alt="sneakers"
            />
            <p>
              <b>Kросівки</b> Puma X Aka Boku Future Rider
            </p>
            <div className="sneakers__footer">
              <div className="sneakers__price">
                <span>Ціна</span>
                <p>16 499 грн.</p>
              </div>
              <img
                width={32}
                height={32}
                src="./img/sneakers__inactive.svg"
                alt="inactive"
              />
            </div>
          </div>
          <div className="sneakers">
            <img
              width={32}
              height={32}
              className="sneakers__favourite"
              src="./img/sneakers__fav.svg"
              alt="favorite"
            />
            <img
              className="sneakers__img"
              src="./img/sneakers1.jpg"
              alt="sneakers"
            />
            <p>
              <b>Kросівки</b> Puma X Aka Boku Future Rider
            </p>
            <div className="sneakers__footer">
              <div className="sneakers__price">
                <span>Ціна</span>
                <p>16 499 грн.</p>
              </div>
              <img
                width={32}
                height={32}
                src="./img/sneakers__inactive.svg"
                alt="inactive"
              />
            </div>
          </div>
          <div className="sneakers">
            <img
              width={32}
              height={32}
              className="sneakers__favourite"
              src="./img/sneakers__fav.svg"
              alt="favorite"
            />
            <img
              className="sneakers__img"
              src="./img/sneakers1.jpg"
              alt="sneakers"
            />
            <p>
              <b>Kросівки</b> Puma X Aka Boku Future Rider
            </p>
            <div className="sneakers__footer">
              <div className="sneakers__price">
                <span>Ціна</span>
                <p>16 499 грн.</p>
              </div>
              <img
                width={32}
                height={32}
                src="./img/sneakers__inactive.svg"
                alt="inactive"
              />
            </div>
          </div>
          <div className="sneakers">
            <img
              width={32}
              height={32}
              className="sneakers__favourite"
              src="./img/sneakers__fav.svg"
              alt="favorite"
            />
            <img
              className="sneakers__img"
              src="./img/sneakers1.jpg"
              alt="sneakers"
            />
            <p>
              <b>Kросівки</b> Puma X Aka Boku Future Rider
            </p>
            <div className="sneakers__footer">
              <div className="sneakers__price">
                <span>Ціна</span>
                <p>16 499 грн.</p>
              </div>
              <img
                width={32}
                height={32}
                src="./img/sneakers__inactive.svg"
                alt="inactive"
              />
            </div>
          </div>
          <div className="sneakers">
            <img
              width={32}
              height={32}
              className="sneakers__favourite"
              src="./img/sneakers__fav.svg"
              alt="favorite"
            />
            <img
              className="sneakers__img"
              src="./img/sneakers1.jpg"
              alt="sneakers"
            />
            <p>
              <b>Kросівки</b> Puma X Aka Boku Future Rider
            </p>
            <div className="sneakers__footer">
              <div className="sneakers__price">
                <span>Ціна</span>
                <p>16 499 грн.</p>
              </div>
              <img
                width={32}
                height={32}
                src="./img/sneakers__inactive.svg"
                alt="inactive"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="cart__container">
        <div className="cart__content">
          <div className="cart__head">
            <h2 className="cart__title">Кошик</h2>
            <img
              width={32}
              height={32}
              className="delBtn"
              src="./img/delBtn.svg"
              alt="delete"
            />
          </div>
          <div className="cart__list">
            <div className="cart__item">
              <img
                width={70}
                height={70}
                className="cart__img"
                src="./img/sneakers2.png"
                alt="sneakers"
              />
              <div className="cart__item__textGroup">
                <div className="cart__item__name">
                  Мужские Кроссовки Nike Air Max 270
                </div>
                <div className="cart__item__price">12 999 грн.</div>
              </div>
              <img
                width={32}
                height={32}
                className="delBtn"
                src="./img/delBtn.svg"
                alt="delete"
              />
            </div>
            <div className="cart__item">
              <img
                width={70}
                height={70}
                className="cart__img"
                src="./img/sneakers2.png"
                alt="sneakers"
              />
              <div className="cart__item__textGroup">
                <div className="cart__item__name">
                  Мужские Кроссовки Nike Air Max 270
                </div>
                <div className="cart__item__price">12 999 грн.</div>
              </div>
              <img
                width={32}
                height={32}
                className="delBtn"
                src="./img/delBtn.svg"
                alt="delete"
              />
            </div>
          </div>
          <div className="cart__submit">
            <div className="cart__submit__line">
              <span>Разом</span>
              <div></div>
              <b>21 450 грн.</b>
            </div>
            <div className="cart__submit__line">
              <span>Податок</span>
              <div></div>
              <b>1540 грн.</b>
            </div>
          </div>
          <button className="cart__submitBtn">
            Оформити замовлення{" "}
            <img
              width={14}
              height={12}
              src="./img/btn__arrow.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
