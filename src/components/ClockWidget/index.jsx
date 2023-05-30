import React, { useState, useEffect } from "react";
import { ClockContainer, ClockTime, ClockLabel, ClockDate } from "./style";

function ClockWidget() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: "numeric", minute: "numeric" };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <ClockContainer>
      <ClockDate className="date">{formatDate(date)}</ClockDate>
      <ClockTime className="clock-widget__time">{formatTime(date)}</ClockTime>
      <ClockLabel className="clock-widget__label">SERGIO PELUQUERIA</ClockLabel>
    </ClockContainer>
  );
}

export default ClockWidget;
