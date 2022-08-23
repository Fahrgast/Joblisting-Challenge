import "./listing.styles.css";

import React from "react";

export function Listing(props) {
  const {
    id,
    company,
    logo,
    newPosition,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.listingData;

  /* Chrome had issues opening local files so the files were put on a server */
  const localServerAddress = "http://127.0.0.1:8080";

  console.log(logo);
  return (
    <div className="listing">
      <img src={`${localServerAddress}/src/${logo}`} alt="Company Logo" />
      <div className="job-info">
        <div className="listing-header">
          <h3>{company}</h3>
          <h3>{newPosition}</h3>
          <h3>{featured}</h3>
        </div>
        <h2>{position}</h2>
        <div className="listing-footer">
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className="categories">
        <h3>{role}</h3>
        <h3>{level}</h3>
        {languages.map((language) => (
          //TODO add unique KEY
          <h3 key="l">{language}</h3>
        ))}
      </div>
    </div>
  );
}
