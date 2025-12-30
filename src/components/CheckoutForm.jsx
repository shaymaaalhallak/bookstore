import React, { useState } from "react";
import { useCart, useDispatchCart } from "../context/CartContext";
import "../style/CheckoutForm.css";
import API_BASE_URL from "../config";
export default function CheckoutForm() {
  const cart = useCart();
  const dispatch = useDispatchCart();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryType: "delivery",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting order...");
    console.log("Customer:", customer);
    console.log("Cart:", cart);
    console.log("Total:", total);

    try {
      const cartForBackend = cart.map((item) => ({
        book_id: item.id, // <- must match column name in order_items table
        qty: item.qty,
        price: item.price,
      }));

      const res = await fetch(`${API_BASE_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer, cart: cartForBackend, total }),
      });

      const text = await res.text();
      console.log("RAW RESPONSE:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        alert("Server error (invalid JSON)");
        return;
      }

      console.log("PARSED RESPONSE:", data);

      if (res.ok && data.success) {
        alert(`Order placed successfully! Order ID: ${data.orderId}`);
        dispatch({ type: "CLEAR" });
      } else {
        alert(data.error || "Failed to place order.");
      }
    } catch (err) {
      console.error("FETCH ERROR:", err);
      alert("Failed to place order.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={customer.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={customer.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={customer.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="address"
        placeholder="Address"
        value={customer.address}
        onChange={handleChange}
        required
      />
      <select
        name="deliveryType"
        value={customer.deliveryType}
        onChange={handleChange}
        required
      >
        <option value="delivery">Delivery</option>
        <option value="pickup">Pickup</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Confirm Order
      </button>
    </form>
  );
}
