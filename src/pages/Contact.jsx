import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <form className="form">
        <h2 className="contact-heading">CONTACT ME</h2>
        <p type="Name:">
          <input placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input placeholder="Leave your email."></input>
        </p>
        <p type="Message:">
          <input placeholder="What would you like to tell me."></input>
        </p>
        <button className="message-btn">Send Message</button>
      </form>
    </>
  );
};

export default Contact;
