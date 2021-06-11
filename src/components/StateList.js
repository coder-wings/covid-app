import React from "react";
import {v4 as uuidv4} from 'uuid'

function StateList(props) {
  const stateList = props.regional.map(function (elem) {
    return (
      <div key={uuidv4()} className="col">
        <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">{elem.loc}</div>
          <div className="card-body">
            <h5 className="card-title">TotalConfimed:</h5>
            <p className="card-text">{elem.totalConfirmed}</p>
            <h5 className="card-title">Deaths:</h5>
            <p className="card-text">{elem.deaths}</p>
            <h5 className="card-title">Discharged:</h5>
            <p className="card-text">{elem.discharged}</p>
          </div>
        </div>
      </div>
    );
  });
  return stateList;
}

export default StateList;
