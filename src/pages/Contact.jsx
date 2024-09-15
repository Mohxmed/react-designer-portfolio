import { useState } from "react";
import "../styles/contact-page.css";
import admin from "../data/admin/adminData";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (Object.values(data).every((value) => value !== "")) {
      setIsSent(true);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper" data-aos="flip-left">
        <div className="left">
          <Link to="/">
            <BiHomeAlt />
            Back to Home
          </Link>
          <div className="data">
            <h3>{admin.name}</h3>
            <p>{admin.brief}</p>
          </div>
        </div>
        <div className="right">
          <div>
            <h2>
              GET IN <b>TOUCH</b>
            </h2>
            <p>24/7 We will answer you questions and problems</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="names">
              <input
                required
                type="text"
                onChange={handleChange}
                value={data.fname}
                name="fname"
                placeholder="First Name"
              ></input>
              <input
                required
                onChange={handleChange}
                value={data.lname}
                type="text"
                name="lname"
                placeholder="Last Name"
              />
            </div>
            <input
              required
              onChange={handleChange}
              value={data.email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              required
              onChange={handleChange}
              value={data.phone}
              type="phone"
              name="phone"
              placeholder="Phone"
            />
            <textarea
              required
              onChange={handleChange}
              value={data.message}
              name="message"
              placeholder="Message"
            ></textarea>
            <button onClick={handleSend}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
