import React from "react";
import getCovidData from "../services/Coviddata";
import { useEffect, useState } from "react";
import "./Home.css";
import cflag from "../images/Flag-India.jpg";

function Home() {
  const [summary, setSummary] = useState({});
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    getCovidData((data) => {
     // console.log(data);
      setSummary(data.data.data.summary);
      setLastUpdate(data.data.lastOriginUpdate);
    });
  }, []);

  return (
    <>
      <div className="summary">
        <p>
          Last Updated:{" "}
          {lastUpdate.split("T")[0] + " " + lastUpdate.slice(12, 19)}
        </p>
        <div className="lastUpdated">
          <img src={cflag} alt="country" />
          <h2 className="cname">India</h2>
        </div>
        <div className="lastUpdated">
          <h1>CoronaVirus Cases:</h1>
          <p>{summary.total}</p>
        </div>
        <div className="lastUpdated">
          <h1>Deaths:</h1>
          <p>{summary.deaths}</p>
        </div>
        <div className="lastUpdated">
          <h1>Recovered:</h1>
          <p style={{ color: "green", fontSize: "50px" }}>
            {summary.discharged}
          </p>
        </div>
        <div className="lastUpdated">
            <h1>Confirmed Cases Foreign:</h1>
            <p>{summary.confirmedCasesForeign}</p>
        </div>
        <div className="lastUpdated">
            <h1>Confirmed But Location Unidentified:</h1>
            <p>{summary.confirmedButLocationUnidentified}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
