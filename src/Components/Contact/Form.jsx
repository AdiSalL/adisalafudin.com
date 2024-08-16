import React, { useState } from "react";
import emailjs from "emailjs-com";
function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t744oyd", // Replace with your EmailJS service ID
        "template_vav2ydy", // Replace with your EmailJS template ID
        e.target,
        "Z09IQXlaOf50G7R5W" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-2 w-screen h-screen flex flex-col justify-center items-center">
      <div>
        <h1>Contact Me:</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
        <div className="">
          <label className="input flex items-center">Email:</label>
          <input
            className="input input-bordered w-full max-w-screen"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email@email.com"
          />
        </div>
        <div>
          <label className="input flex items-center">Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input input-bordered w-full max-w-screen"
            placeholder="Hiring For Project ...."
          />
        </div>
        <div>
          <label className="input flex items-center">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
            placeholder="The Project Is To Make SAAS....."
          />
        </div>
        <button type="submit" className="btn w-full">
          Send Email
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
