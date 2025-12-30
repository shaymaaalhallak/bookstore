import React, { useEffect, useState, useMemo } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useDispatchCart } from "../context/CartContext";

export default function Browse() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatchCart();

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return books.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    );
  }, [query, books]);

  return (
    <main className="container py-4">
      <SearchBar value={query} onChange={setQuery} />

      <div className="row g-3 mt-3">
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
