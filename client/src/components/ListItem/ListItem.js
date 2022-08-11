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
    <div className="list-container flex items-center">
      <FaCalendarCheck></FaCalendarCheck>
      <div className="flex flex-col p-2">
        {todo}
        <span className="text-xs">{`${weekDay}  ${[month, day, year]}`}</span>
      </div>
    </div>
  );
}
