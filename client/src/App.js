import React, { useState, useRef, useEffect } from "react";
import { Router, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import List from "./components/List/List";
import Login from "./components/Login";
import ListItem from "./components/ListItem/ListItem";
import { useToken } from "./utils/useToken";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Routes>
      <Route path="/list" element={<List />}></Route>
    </Routes>
  );
}
