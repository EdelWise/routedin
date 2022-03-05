import React, { useState } from "react";
import axios from "axios";
import Recaptcha from "react-google-recaptcha";

export default function ContactForm() {
  const [formDetails, setFormDetails] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://europe-west3-routed-in-website.cloudfunctions.net/info-mailer",
        formDetails
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const setDetails = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(formDetails);
  };

  const handleCaptcha = () => {
    setConfirmed(true);
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col text-white mb-10 justify-center desktop:px-14 "
    >
      <div className="mb-6 flex flex-col">
        <label className="text-white pb-1" htmlFor="name">
          Name
        </label>

        <input
          className="bg-black border border-solid border-white h-12 px-5 focus:outline-green"
          type="text"
          id="name"
          name="name"
          placeholder="write your name"
          onChange={setDetails}
        />
      </div>
      <div className="mb-6 flex flex-col">
        <label className="text-white pb-1" htmlFor="phone">
          Phone
        </label>
        <input
          className="bg-black border border-solid border-white h-12 px-5 focus:outline-green"
          type="tel"
          id="phone"
          name="phone"
          placeholder="your phone"
          onChange={setDetails}
        />
      </div>
      <div className="mb-6 flex flex-col">
        <label className="text-white pb-1" htmlFor="email">
          Email
        </label>
        <input
          className="bg-black border border-solid border-white h-12 px-5 focus:outline-green"
          type="email"
          required
          id="email"
          name="email"
          placeholder="your email"
          onChange={setDetails}
        />
      </div>
      <div className="mb-6 flex flex-col">
        <label className="text-white pb-1" htmlFor="comments">
          Comments
        </label>
        <textarea
          className="bg-black border border-solid border-white min-h-fit px-5 focus:outline-green"
          type="text"
          id="comments"
          name="comments"
          placeholder="Leave your comments"
          onChange={setDetails}
        />
      </div>

      <Recaptcha
        className="mb-4"
        sitekey="6LerjnYeAAAAAPgXJ0GX0K_3kLNWlv5vh1SGUwJ9"
        onChange={handleCaptcha}
        theme={"dark"}
      />

      <button
        className="bg-green text-white text-3xl p-1 font-roboto disabled:bg-grey-light"
        type="submit"
        disabled={!confirmed}
      >
        Submit
      </button>
    </form>
  );
}
