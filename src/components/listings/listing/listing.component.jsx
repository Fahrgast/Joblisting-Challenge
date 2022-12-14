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

  const isNew = props.listingData.new;

  return (
    <div className="listing">
      <div className="left-side">
        <img className="company-logo" src={logo} alt="Company Logo" />
        <div className="job-info">
          <div className="listing-header">
            <h3 className="company-name">{company}</h3>
            {isNew ? <h3 className="new-listing">NEW!</h3> : <h3> </h3>}
            {featured ? (
              <h3 className="featured-listing">FEATURED</h3>
            ) : (
              <p></p>
            )}
          </div>
          <h3 className="position-title">{position}</h3>
          <div className="listing-footer">
            <p>
              {postedAt} <span>&#8226;</span>
            </p>
            <p>
              {contract} <span>&#8226;</span>
            </p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="categories">
        <button onClick={() => props.changeFilter(role)}>{role}</button>
        <button onClick={() => props.changeFilter(level)}>{level}</button>
        {languages.map((language) => (
          <button
            onClick={() => props.changeFilter(language)}
            key={`${id}_${language}`}
          >
            {language}
          </button>
        ))}
        {tools.map((tool) => (
          <button
            onClick={() => props.changeFilter(tool)}
            key={`${id}_${tool}`}
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}
