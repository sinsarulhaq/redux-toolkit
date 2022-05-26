import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openModel } from '../features/model/modelSlice'
import CartItem from './CartItem'

const CartContainer = () => {
    const dispatch = useDispatch()
    const { amount, total, cartItems } = useSelector((state) => state.cart)

    if(amount < 1){
        return(
            <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
        )
    }

  return (
    <section className='cart'>
    <header>
      <h2>your bag</h2>
    </header>
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>${total.toFixed(2)}</span>
        </h4>
      </div>
      <button className='btn clear-btn'
      onClick={() => dispatch(openModel())}
      >
        clear cart
      </button>
    </footer>
  </section>
  )
}

export default CartContainer