import React, { useState } from "react";

const CalendarGenerator = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Generate calendar
  const generateCalendar = () => {
    const days = [];
    const totalDays = getDaysInMonth(year, month);

    // Find first day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Fill empty slots before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Fill days of the month
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  const days = generateCalendar();

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(new Date(year, month, day).toDateString());
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📅 Calendar Generator</h2>

      {/* Month & Year Select */}
      <div style={{ marginBottom: "10px" }}>
        <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
          {months.map((m, i) => (
            <option key={i} value={i}>{m}</option>
          ))}
        </select>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          style={{ marginLeft: "10px", width: "80px" }}
        />
      </div>

      {/* Calendar */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 50px)",
        gap: "5px",
        justifyContent: "center"
      }}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
          <div key={i} style={{ fontWeight: "bold" }}>{day}</div>
        ))}
        {days.map((day, i) => (
          <div
            key={i}
            onClick={() => handleDateClick(day)}
            style={{
              width: "50px",
              height: "50px",
              lineHeight: "50px",
              border: "1px solid #ccc",
              cursor: day ? "pointer" : "default",
              backgroundColor:
                selectedDate === new Date(year, month, day).toDateString()
                  ? "lightblue"
                  : "white"
            }}
          >
            {day || ""}
          </div>
        ))}
      </div>

      {/* Selected Date */}
      {selectedDate && (
        <h3 style={{ marginTop: "15px" }}>📌 Selected: {selectedDate}</h3>
      )}
    </div>
  );
};

export default CalendarGenerator;
