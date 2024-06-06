import React, { useState, useEffect } from "react";
const CountryCard = ({ countryname, imageSrc, imageAlt }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        width: "150px",
        border: "1px solid #eee",
        margin: ".5rem",
        padding: "1rem",
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{ width: "100px", height: "100px" }}
      />
      <p>{countryname}</p>
    </div>
  );
};
const Country = () => {
  const [apidata, setApidata] = useState([]);
  const API_CALL = "https://restcountries.com/v3.1/all";
  let res = async () => {
    try {
      let response = await fetch(API_CALL);
      let data = response.json();
      data.then((res) => setApidata(res));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    res();
  }, []);
  // console.log(apidata);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {apidata.map((data, ind) => (
        <CountryCard
          countryname={data.name.common}
          imageSrc={data.flags.png}
          imageAlt={data.flags.alt}
          key={ind}
        />
      ))}
    </div>
  );
};

export default Country;
