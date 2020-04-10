import React from "react";
import useFetch from "../hooks/useFetch";
import "./styling.css";
function FetchingData() {
  const res = useFetch("http://localhost:5000/api/players", {});
  if (!res.response) {
    return <div className="lds-grid"></div>;
  }
  const Data = res.response;

  return (
    <div>
      {console.log("res.response", res.response)}
      {Data.map((data) => (
        <>
          <div className=" box jello-horizontal">
            <h1>{data.name}</h1>

            <h2>{data.country}</h2>
          </div>
        </>
      ))}
    </div>
  );
}

export default FetchingData;
