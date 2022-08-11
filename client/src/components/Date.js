import React from "react";

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

export default function Date() {
  return <span>{`${weekDay} + ${(month, day, year)}`}</span>;
}
