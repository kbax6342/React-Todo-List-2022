import React, { useState } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <div className="container mx-auto shadow-md  mt-5 rounded-lg px-4 py-5 login-background">
      <p className="text-3xl font-bold text-center mb-4">Agent Login</p>
      <p className="text-center mb-4">
        Hey, Enter your details to get sign in to your account
      </p>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>
            <input
              placeholder="Enter Username"
              type="text"
              className="border-2 p-2 my-3 w-full rounded-lg"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Enter Password"
              type="text"
              className="border-2 p-2 w-full my-3 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <div className=" mx-auto my-2 ">
          <button
            type="submit"
            className="black-text font-bold px-5 bt-col rounded-lg py-3 w-6/1"
          >
            Sign In
          </button>
        </div>
        <p className="text-center"> Or Sign in with </p>
        {/* Authetication */}

        <p className="text-xs text-center my-3">
          Don't have an account? <a>RequestNow</a>
        </p>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
