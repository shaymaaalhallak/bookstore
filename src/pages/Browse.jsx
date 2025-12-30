import React, { useEffect, useState, useMemo } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useDispatchCart } from "../context/CartContext";

export default function Browse() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatchCart();

  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/books`);
        const data = await res.json();
        console.log("BOOKS FROM API:", data);
        setBooks(data);
      } catch (err) {
        console.error("FETCH ERROR:", err);
      }
    };

    fetchBooks();
  }, [BACKEND_URL]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return books.filter(
      (b) =>
        b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
  }, [query, books]);

  return (
    <main className="container py-4">
      <SearchBar value={query} onChange={setQuery} />

      <div className="row g-3 mt-3">
        {filtered.length === 0 && <p className="text-muted">No books found</p>}

        {filtered.map((book) => (
          <div key={book.id} className="col-md-4">
            <BookCard
              book={book}
              onAdd={() => dispatch({ type: "ADD", item: book })}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
