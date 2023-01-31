import React from "react";

export const Data = () => {
  let date = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const toDate = () => {
    return new Intl.DateTimeFormat("en-En", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <div>
      <div className="text-secondary">{weekdays[date.getDay()]}</div>
      <div className="text-secondary">{toDate(date)}</div>
    </div>
  );
};
