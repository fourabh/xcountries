import React, { useEffect, useState } from "react";

const CountryCard = ({ flag, name }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #dfd3d3",
          borderRadius: "8px",
          height: "150px",
          width: "150px",
          padding: "4px",
          margin: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign:"center"
        }}
      >
        <img src={flag} alt={name} height="100px" width="100px" />
        <h3>{name}</h3>
      </div>
    </>
  );
};

const Countries = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin:"8px",
        padding:"8px",
        marginLeft:"4vw"
      }}
    >
      {data.map((card) => (
        <CountryCard key={card.abbr} flag={card.flag} name={card.name} />
      ))}
    </div>
  );
};

export default Countries;
