export default function Cart(props) {
  return (
    <div className="cart__container">
      <div className="cart__content">
        <div className="cart__head">
          <h2 className="cart__title">Кошик</h2>
          <img
            onClick={props.onClose}
            width={32}
            height={32}
            className="delBtn"
            src="./img/delBtn.svg"
            alt="delete"
          />
        </div>
        <div className="cart__list">
          {props.data.map((item) => (
            <div key={item.id} className="cart__item">
              <img
                width={70}
                height={70}
                className="cart__img"
                src={item.imgUrl}
                alt="sneakers"
              />
              <div className="cart__item__textGroup">
                <div className="cart__item__name">{item.title}</div>
                <div className="cart__item__price">{item.price} грн.</div>
              </div>
              <img
                onClick={() => props.deleteItem(item)}
                width={32}
                height={32}
                className="delBtn"
                src="./img/delBtn.svg"
                alt="delete"
              />
            </div>
          ))}
        </div>
        <div className="cart__submit">
          <div className="cart__submit__line">
            <span>Разом</span>
            <div></div>
            <b>{props.cartPrice + props.cartPrice * 0.08} грн.</b>
          </div>
          <div className="cart__submit__line">
            <span>Податок</span>
            <div></div>
            <b>{props.cartPrice * 0.08} грн.</b>
          </div>
        </div>
        <button className="cart__submitBtn">
          Оформити замовлення{" "}
          <img width={14} height={12} src="./img/btn__arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}
