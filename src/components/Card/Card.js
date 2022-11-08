import React from "react";

export default function Card({ data, onAddCart }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onAddCart({
      title: data.title,
      price: data.price,
      imgUrl: data.imgUrl,
      id: data.id,
    });
  };
  return (
    <div className="sneakers">
      <img
        width={32}
        height={32}
        className="sneakers__favourite"
        src="./img/sneakers__fav.svg"
        alt="favorite"
      />
      <img className="sneakers__img" src={data.imgUrl} alt="sneakers" />
      <p>{data.title}</p>
      <div className="sneakers__footer">
        <div className="sneakers__price">
          <span>Ціна</span>
          <p>{data.price} грн.</p>
        </div>
        <img
          onClick={onClickPlus}
          width={32}
          height={32}
          src={
            isAdded
              ? "./img/sneakers__active.svg"
              : "./img/sneakers__inactive.svg"
          }
          alt="inactive"
        />
      </div>
    </div>
  );
}
