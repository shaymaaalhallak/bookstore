import React from 'react'
import { useCart, useDispatchCart } from '../context/CartContext'
import '../style/Cart.css';

export default function Cart() {
  const cart = useCart() || []
  const dispatch = useDispatchCart()

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div className="container container-max py-5">
      <h2 className="fw-bold mb-4 text-primary">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="cart-wrapper">

          {/* ITEMS */}
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-card shadow-sm rounded p-3 mb-3 d-flex align-items-center gap-3">

                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded"
                  style={{ width: 90, height: 90, objectFit: 'cover' }}
                />

                <div className="flex-grow-1">
                  <div className="fw-semibold fs-5">{item.title}</div>
                  <div className="text-muted small">{item.author}</div>
                </div>

                {/* Quantity */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    onClick={() => dispatch({ type: 'DECREASE', id: item.id })}
                    className="btn btn-light qty-btn"
                  >
                    -
                  </button>

                  <div className="fw-semibold">{item.qty}</div>

                  <button
                    onClick={() => dispatch({ type: 'ADD', item })}
                    className="btn btn-light qty-btn"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="fw-semibold text-success fs-6 ms-4">
                  ${(item.price * item.qty).toFixed(2)}
                </div>

                <button id='remove'
                  className="btn btn-sm btn-outline-danger ms-3"
                  onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          {/* TOTAL SECTION */}
          <div className="cart-summary shadow rounded p-4 mt-4 bg-light">
            <h4 className="fw-semibold">Order Summary</h4>

            <div className="d-flex justify-content-between mt-3">
              <span className="fw-medium">Total:</span>
              <span className="fw-bold fs-4 text-success">${total.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-end mt-4 gap-2">
              <button
                onClick={() => dispatch({ type: 'CLEAR' })}
                className="btn btn-outline-secondary"
              >
                Clear Cart
              </button>

              <button className="btn btn-primary px-4">
                Checkout
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
