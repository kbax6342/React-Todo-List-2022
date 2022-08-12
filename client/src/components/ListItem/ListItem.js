import React, { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import "./ListItem.css";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
let weekDay = weekDays[d.getDay()];
let month = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();

export default function ListItem({ todo }) {
  return (
    <div className="list-container flex items-center border rounded-lg mb-2 p-3">
      <FaCalendarCheck className="text-2xl "></FaCalendarCheck>
      <div className="flex flex-col p-2 ">
        <span className="text-2xl">{todo}</span>
        <span className="text-xs">{`${weekDay}  ${[month, day, year]}`}</span>
      </div>
    </div>
  );
}
