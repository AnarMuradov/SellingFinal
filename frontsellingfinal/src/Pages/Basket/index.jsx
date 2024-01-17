import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import './style.scss'
const Basket = () => {
    const {basket,removeBasket} = useContext(BasketContext)
  return (
    <section className='basket'>
        <div className='basket__container'>
        <div className="basket__container__table">
          <table>
            <thead>
              <th>Image</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Like</th>
              <th>Description</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {basket
                .map((x) => {
                  return (
                    <tr key={x._id}>
                      <td>
                        <img src={x.img} alt="" />
                      </td>
                      <td>{x.title}</td>
                      <td>{x.rating}🎇</td>
                      <td>{x.like}❤</td>
                      <td>{x.description}</td>
                      <td>
                        <button onClick={()=>removeBasket(x)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        </div>
    </section>
  )
}

export default Basket