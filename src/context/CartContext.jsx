import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find(i => i.id === action.item.id)
      if (existing) {
        return state.map(i => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...state, { ...action.item, qty: 1 }]
    }
    case 'REMOVE':
      return state.filter(i => i.id !== action.id)
    case 'DECREASE':
      return state.flatMap(i => i.id === action.id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i])
    case 'CLEAR':
      return []
    default:
      throw new Error('Unknown action')
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, [])
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

export function useCart() {
  return useContext(CartStateContext)
}

export function useDispatchCart() {
  return useContext(CartDispatchContext)
}
