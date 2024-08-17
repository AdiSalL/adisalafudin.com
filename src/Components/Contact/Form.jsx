import React, { useRef, useState } from "react";

function ContactForm() {
  const formRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbydyYbn1BASqsWvOU0sK9YSVfWIkLfBMMUxVps97lvXbGMNtneUanYGTbCQ34H5cNXgxQ/exec",
      {
        method: "POST",
        body: new FormData(formRef.current),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="mt-2 w-screen h-screen flex flex-col justify-center items-center">
      <div>
        <h1>Contact Me:</h1>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="w-1/2 mx-auto">
        <div className="">
          <label className="input flex items-center">Email:</label>
          <input
            className="input input-bordered w-full max-w-screen"
            type="email"
            name="Email"
            required
            placeholder="email@email.com"
          />
        </div>
        <div>
          <label className="input flex items-center">Name:</label>
          <input
            type="text"
            name="Name"
            required
            className="input input-bordered w-full max-w-screen"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="input flex items-center">Message:</label>
          <textarea
            name="Message"
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
