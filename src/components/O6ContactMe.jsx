import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSendMessage = async (e) => {
  e.preventDefault();
  await axios
    .post(
      // "https://localhost:9000/api/v1/message/send",
      {
        name,
        email,
        message,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => {
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((error) => {
      toast.error(error.response.data.message);
    });
};

const O6ContactMe = () => {
  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}    
                />
              </div>
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}        
              />
              <button className="sent" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>  
    </>    
  )
}  

export default O6ContactMe