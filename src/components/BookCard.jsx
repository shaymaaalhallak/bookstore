import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book, onAdd }) {
  // Use backend URL from env variable or fallback to localhost
  const BACKEND_URL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BACKEND_URL
      : "http://localhost:5000";

  return (
    <div className="card h-100">
      <img
        src={`${BACKEND_URL}/assets/${book.image}`}
        className="card-img-top"
        alt={book.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text text-muted small">{book.author}</p>
        <div className="mt-auto d-flex align-items-center justify-content-between">
          <div>
            <div className="fw-semibold">
              $
              {!isNaN(Number(book.price))
                ? Number(book.price).toFixed(2)
                : "N/A"}
            </div>
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
