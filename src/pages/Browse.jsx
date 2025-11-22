import React, { useState, useMemo } from 'react'
import booksData from '../data/book'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar'
import { useDispatchCart } from '../context/CartContext'

export default function Home() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatchCart()

  const onAdd = (book) => dispatch({ type: 'ADD', item: book })

  // Use useMemo to avoid recalculating on every render
  const filtered = useMemo(() => {
    const lowerQuery = query.toLowerCase()
    return booksData.filter(b =>
      b.title.toLowerCase().includes(lowerQuery) ||
      b.author.toLowerCase().includes(lowerQuery) ||
      b.category.toLowerCase().includes(lowerQuery)
    )
  }, [query])

  return (
    <main className="container container-max py-4">
      <section className="mb-4">
        <h1 className="h3 fw-bold">Discover books</h1>
        <p className="text-muted">Browse, search, and add books to your cart.</p>
      </section>

      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <section>
        {filtered.length === 0 ? (
          <p className="text-muted">No books found matching your search.</p>
        ) : (
          <div className="row g-3">
            {filtered.map(b => (
              <div key={b.id} className="col-12 col-sm-6 col-lg-4">
                <BookCard book={b} onAdd={onAdd} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
