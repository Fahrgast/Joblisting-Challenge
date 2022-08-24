import "./listing.styles.css";

import React from "react";

export function Listing(props) {
  const {
    id,
    company,
    logo,
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
  const isNew = props.listingData.new;

  return (
    <div className="listing">
      <img
        className="company-logo"
        src={`${localServerAddress}/src/${logo}`}
        alt="Company Logo"
      />
      <div className="job-info">
        <div className="listing-header">
          <h3>{company}</h3>
          {isNew ? <h3 className="new-listing">NEW!</h3> : <h3> </h3>}
          {featured ? (
            <h3 className="featured-listing">FEATURED</h3>
          ) : (
            <h3></h3>
          )}
        </div>
        <h2 className="position-title">{position}</h2>
        <div className="listing-footer">
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className="categories">
        <button>{role}</button>
        <button>{level}</button>
        {languages.map((language) => (
          <button key={`${id}_${language}`}>{language}</button>
        ))}
        {tools.map((tool) => (
          <button key={`${id}_${tool}`}>{tool}</button>
        ))}
      </div>
    </div>
  );
}
