import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book, onAdd }) {
  const imageUrl = book.image?.startsWith("http")
    ? book.image
    : `${process.env.REACT_APP_FRONTEND_URL || ""}${book.image}`;

  return (
    <div className="card h-100">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={book.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/assets/placeholder.webp";
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted small">{book.author}</p>

        <div className="mt-auto d-flex align-items-center justify-content-between">
          <div>
            <div className="fw-semibold">${Number(book.price).toFixed(2)}</div>
            <div className="small text-muted">⭐ {book.rating}</div>
          </div>

          <div className="btn-group">
            <button
              onClick={() => onAdd(book)}
              className="btn btn-primary btn-sm"
            >
              Add
            </button>
            <Link
              to={`/book/${book.id}`}
              className="btn btn-outline-secondary btn-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
