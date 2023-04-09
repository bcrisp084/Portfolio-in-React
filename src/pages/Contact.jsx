import Navbar from "../components/Navbar";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMesssage] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "message") {
      setMesssage(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMesssage("");
  };

  return (
    <>
      <Navbar />
      <form action="https://submit-form.com/YveENMT9" className="form">
        <h2 className="contact-heading">CONTACT ME</h2>
        <p type="Name:">
          <input
            required
            onChange={handleChange}
            name="name"
            placeholder="Write your name here.."
          ></input>
        </p>
        <p type="Email:">
          <input
            required
            onChange={handleChange}
            name="email"
            placeholder="Leave your email."
          ></input>
        </p>
        <p type="Message:">
          <input
            required
            onChange={handleChange}
            name="message"
            placeholder="What would you like to tell me."
          ></input>
        </p>
        <button onSubmit={handleSubmit} className="message-btn">
          Send message
        </button>
        <div>
          <p className="confirm"></p>
        </div>
      </form>
    </>
  );
};

export default Contact;
