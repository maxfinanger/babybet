import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChampagneAPI from "../api/champagneAPI";

function CurrentDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = `${date}.${month}.${year}`;

  const betDates = [
    { name: "Gabriel", date: "15.09.2024" },
    { name: "Sebastian", date: "16.02.2026" },
    { name: "Stian", date: "13.11.2026" },
    { name: "Fredrik", date: "27.05.2027" },
    { name: "Max", date: "14.06.2027" },
  ];

  // Function to parse date strings (DD.MM.YYYY) to Date objects
  const parseDate = (dateStr: any) => {
    const [day, month, year] = dateStr.split(".").map(Number);
    return new Date(year, month - 1, day);
  };

  // Calculate the difference in days between two dates
  const dateDiffInDays = (date1: Date, date2: Date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    // @ts-ignore
    return Math.round(Math.abs((date1 - date2) / oneDay));
  };

  // Determine the current favorite
  let favorite = betDates[0];
  let minDiff = dateDiffInDays(today, parseDate(betDates[0].date));

  betDates.forEach((bet) => {
    const betDate = parseDate(bet.date);
    const diff = dateDiffInDays(today, betDate);
    if (diff < minDiff) {
      minDiff = diff;
      favorite = bet;
    }
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h3 className="card-title">Today</h3>
              <p className="card-text">{currentDate}</p>
              <h4>Current Favorite</h4>
              <p>
                {favorite.name} with the date {favorite.date}
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h3 className="card-title">Bet Dates</h3>
              <ul className="list-group list-group-flush">
                {betDates.map((bet, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-secondary rounded text-white border-0 mb-3"
                  >
                    <div className="d-flex justify-content-between">
                      <span>{bet.name}</span>
                      <span>{bet.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentDate;
