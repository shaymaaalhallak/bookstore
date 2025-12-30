import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatchCart } from "../context/CartContext";
import API_BASE_URL from "../config";
export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const dispatch = useDispatchCart();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook({
          ...data,
          price: Number(data.price) || 0,
        });
      });
  }, [id]);

  if (!book) return <p className="container py-4">Loading...</p>;

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`http://localhost:5000/assets/${book.image}`}
            alt={book.title}
            className="img-fluid"
          />
        </div>

        <div className="col-md-8">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <h5>${book.price.toFixed(2)}</h5>

          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "ADD", item: book })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
