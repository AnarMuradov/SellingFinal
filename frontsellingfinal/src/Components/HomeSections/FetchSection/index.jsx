import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { BasketContext } from "../../../Context/BasketContext";
const FetchSection = () => {
  const {addBasket} = useContext(BasketContext)
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  return (
    <section className="ourProducts">
      <div className="ourProducts__container">
        <div className="ourProducts__container__title">
          <div className="ourProducts__container__title__content">
            <span>POPULAR PRODUCTS</span>
            <h2>Our Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>
        </div>
        <div className="ourProducts__container__allCard">
          {api.map((x) => {
            return (
              <div
                key={x._id}
                className="ourProducts__container__allCard__card"
              >
                <div className="ourProducts__container__allCard__card__imgBg">
                  <div className="ourProducts__container__allCard__card__imgBg__box">
                    <img src={x.img} alt="" />
                  </div>
                </div>
                <div className="ourProducts__container__allCard__card__title">
                  {x.title}
                </div>
                <div className="ourProducts__container__allCard__card__rating">
                  <i className="fa-solid fa-star"></i>
                  <span>{x.rating}</span>
                  
                  <i className="fa-solid fa-heart"></i>
                  <span>{x.like}</span>
                </div>
                <div className="ourProducts__container__allCard__card__text">
                  {x.description}
                </div>
                <div className="ourProducts__container__allCard__card__btn">
                  <div className="ourProducts__container__allCard__card__btn__basket">
                    <button onClick={()=>addBasket(x)}>Cart</button>
                  </div>
                  <div className="ourProducts__container__allCard__card__btn__detail">
                    <Link to={`/DetailPage/${x._id}`}><button>View</button></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FetchSection;
