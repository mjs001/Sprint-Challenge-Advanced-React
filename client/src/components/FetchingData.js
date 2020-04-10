import React from "react";
import useFetch from "../hooks/useFetch";
import "./styling.css";
function FetchingData() {
  const res = useFetch("http://localhost:5000/api/players", {});
  if (!res.response) {
    return <div className="lds-grid" data-testid="loading"></div>;
  }
  const Data = res.response;

  return (
    <div data-testid="all-box">
      {console.log("res.response", res.response)}
      {Data.map((data) => (
        <>
          <div className=" box jello-horizontal" data-testid="in">
            <h1 data-testid="name">{data.name}</h1>
            <h2 data-testid="country">{data.country}</h2>
          </div>
        </>
      ))}
    </div>
  );
}

export default FetchingData;
