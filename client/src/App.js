import React, { useState, useRef, useEffect } from "react";
import { Router, Route, Routes, Switch, Redirect } from "react-router-dom";
import "./App.css";
import List from "./components/List/List";
import Login from "./components/Login";
import ListItem from "./components/ListItem/ListItem";
import jwt_decode from "jwt-decode";
import { useToken } from "./utils/useToken";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function App() {
  const { token, setToken } = useToken();
  const [user, setUser] = useState({});
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
  //initialize client for google id

  function handleCallbackResponse(res) {
    console.log("Econded JWT ID token response:" + res.credential);
    var userObject = jwt_decode(res.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    document.getElementById("login-con").hidden = true;
    document.getElementById("list").hidden = false;
  }

  useEffect(() => {
    document.getElementById("list").hidden = true;
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "911822436225-3np6bmas7thf30980793v31q7toe30k5.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    //initialize button for login
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <div
        id="login-con"
        className="container mx-auto shadow-md  mt-5 rounded-lg px-4 py-5 login-background"
      >
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
          <div id="signInDiv"></div>
          <p className="text-xs text-center my-3">
            Don't have an account? <a>RequestNow</a>
          </p>
        </form>
      </div>

      <div id="list">
        <List />
      </div>
    </div>
  );
}
