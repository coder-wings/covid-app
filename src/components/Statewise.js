import React from "react";
import { useState, useEffect } from "react";
import StateList from "./StateList";

import getCovidData from "../services/Coviddata";

function Statewise() {
  const [regional, setRegional] = useState([]);
  useEffect(() => {
    getCovidData((data) => {
      console.log(data);
      setRegional(data.data.data.regional);
    });
    console.log(regional);
    // return () => {
    //     cleanup
    // }
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <StateList regional={regional} />
    </div>
  );
}

export default Statewise;
