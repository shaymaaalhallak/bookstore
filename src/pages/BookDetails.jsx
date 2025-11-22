import React from 'react'
import { useParams } from 'react-router-dom'
import books from '../data/book'
import { useDispatchCart } from '../context/CartContext'

export default function BookDetails(){
  const { id } = useParams()
  const book = books.find(b=>b.id === id)
  const dispatch = useDispatchCart()
  if(!book) return <div className="container container-max py-4">Book not found</div>

  return (
    <div className="container container-max py-4">
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <img src={book.image} alt={book.title} className="img-fluid rounded" style={{height: '100%', objectFit: 'cover'}} />
        </div>
        <div className="col-12 col-md-8">
          <h2 className="h4 fw-bold">{book.title}</h2>
          <p className="text-muted">{book.author}</p>
          <p className="mt-3">{book.description}</p>
          <div className="mt-3 d-flex align-items-center gap-3">
            <div className="h5 fw-semibold">${book.price.toFixed(2)}</div>
            <button onClick={()=>dispatch({type:'ADD', item: book})} className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
