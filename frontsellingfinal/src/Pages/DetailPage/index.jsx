import React, { useEffect, useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom';
const DetailPage = () => {
    const {id} = useParams()
    const [api, setApi] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:3000/${id}`)
        .then((res) => res.json())
        .then((data) => setApi(data));
    }, [id]);
  return (
    <section className='detail'> 
        <div className='detail__container'>
        <div
                className="detail__container__card"
              >
                <div className="detail__container__card__imgBg">
                  <div className="detail__container__card__imgBg__box">
                    <img src={api.img} alt="" />
                  </div>
                </div>
                <div className="detail__container__card__title">
                  {api.title}
                </div>
                <div className="detail__container__card__rating">
                  <i className="fa-solid fa-star"></i>
                  <span>{api.rating}</span>
                  
                  <i className="fa-solid fa-heart"></i>
                  <span>{api.like}</span>
                </div>
                <div className="detail__container__card__text">
                  {api.description}
                </div>
                <div className="detail__container__card__btn">
                  <div className="detail__container__card__btn__basket">
                    <button>Cart</button>
                  </div>
                </div>
              </div>
        </div>
    </section>
  )
}

export default DetailPage