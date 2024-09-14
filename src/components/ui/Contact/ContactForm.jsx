import { useState } from "react";
import data from "../../../data/admin/adminData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!isSent) {
      setError(true);
    }

    formData.name && formData.email && formData.message && setIsSent(true);
  };

  if (isSent) {
    console.log(formData);
    return (
      <div className=" contact-form sent">
        <h3>Your Message Has Been Sent!</h3>
        <p>to: {data.email}</p>
      </div>
    );
  }

  return (
    <div className="contact-form" data-aos="fade-left">
      <h3>We’d Love To Hear From You</h3>
      <div className="form-wrapper" style={{ position: "relative" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={formData.name && formData.name}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={formData.email && formData.email}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <textarea
            onChange={(e) => {
              handleChange(e);
            }}
            value={formData.message && formData.message}
            name="message"
            placeholder="Enter your message"
          ></textarea>
          {error && <p>Please fill all the information fields</p>}
          <button onClick={handleSubmit} className="btn">
            Email me
          </button>
        </form>
      </div>
    </div>
  );
}
