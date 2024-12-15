import React, { useState } from "react";
import "../styles/calendar.css"; // Add CSS for styling (styles example included below)
import Header from "../components/Header"
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthNames = [
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

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );

    // Find the starting day of the current month
    const startDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const calendarDays = [];

    // Empty slots for days before the start of the month
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }

    // Actual days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(
        <div className="calendar-day" key={day}>
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  return (
   <>
   <Header/>
   <div className="calendar">
      <header className="calendar-header">
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>Next</button>
      </header>
      <div className="calendar-grid">
        <div className="calendar-day-header">Sun</div>
        <div className="calendar-day-header">Mon</div>
        <div className="calendar-day-header">Tue</div>
        <div className="calendar-day-header">Wed</div>
        <div className="calendar-day-header">Thu</div>
        <div className="calendar-day-header">Fri</div>
        <div className="calendar-day-header">Sat</div>
        {renderCalendarDays()}
      </div>
    </div>
   </>
  );
};

export default Calendar;
