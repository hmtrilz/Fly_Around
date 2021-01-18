import React from "react";

const AutoCompleteItem = ({
  iata_code,
  city,
  country,
  onSelectItem,
  isHighlighted,
}) => {
  return (
    <li
      className={`list-group-item ${isHighlighted ? "active highlighted" : ""}`}
      onClick={onSelectItem}
    >
      <div className="row">
        <div className="col text-left "></div>
        <p className="results-item">{city}, {country} </p>
        <h5 className="iata"> {iata_code}</h5>
      </div>
    </li>
  );
};

export default AutoCompleteItem;
