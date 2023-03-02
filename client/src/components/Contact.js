import React from "react";
import "./contact.css";
function Contact() {
  return (

    <div>
      {" "}
      <div className="contact">
        <small>Enter message (optional) and click button "Send"</small>
        <div className="wrapper centered">
          <article className="letter">
            <div className="side">
              <h1>Contact us</h1>
              <p>
                <textarea placeholder="Your message" defaultValue={""} />
              </p>
            </div>
            <div className="side">
              <p>
                <input type="text" placeholder="Your name" />
              </p>
              <p>
                <input type="email" placeholder="Your email" />
              </p>
              <p>
                <button id="sendLetter">Send</button>
              </p>
            </div>
          </article>
          <div className="envelope front" />
          <div className="envelope back" />
        </div>
        <p className="result-message centered">Thank you for your message</p>
      </div>
    </div>
  );
}

export default Contact;
