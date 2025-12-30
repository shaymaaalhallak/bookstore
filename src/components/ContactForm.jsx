import API_BASE_URL from "../config";
export async function submitContactForm(formData, setFormData) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Request failed");
    }

    const data = await res.json();
    console.log("Response:", data);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    console.error("Error sending message:", err.message);
    alert("Failed to send message.");
  }
}
