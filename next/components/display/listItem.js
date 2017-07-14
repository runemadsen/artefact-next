import React, { Component } from "react";
import { formatMoney } from "accounting";
import dateformat from "dateformat";
import { Link } from "../../routes";

const ListItem = props => {
  const handleOnClick = () => {
    // props.onClick(props.work.id);
  };
  let work = props.work;
  work.currentLocation = work.currentLocation || {};
  return (
    <div className="list-item" id={work.id}>

      <figure className="item-image" onClick={handleOnClick}>
        <img src={work.image} />
      </figure>
      <div className="item-info" onClick={handleOnClick}>
        <span className="item-title">{work.title}</span><br />
        {/*it would make sense for the author to not show if it's yourself*/}
        <span className="item-artist-name">{work.artist}</span><br />
        <span className="item-medium">{work.medium}</span><span>, </span>
        <span className="item-creation-date">
          {dateformat(work.creationDate, "mediumDate")}
        </span>
        <br />
        <div className="item-dimensions">
          {work.width ? `${work.width}` : null}
          {work.height ? `×${work.height}` : null}
          {work.depth ? `×${work.depth}` : null}
          {" " + work.dimensionUnits}
        </div>
        {work.price
          ? <div className="item-price">
              {work.currency} {formatMoney(work.price, "$", 0)}
            </div>
          : null}
      </div>
      <div className="item-status">
        <span className="item-label">currently at:</span>
        <span className="item-location">{work.currentLocation.label}</span>
        <br />
        {work.currentLocation.since
          ? <span>
              <span className="item-label">since </span>
              <span className="item-location-since">
                {dateformat(work.currentLocation.since, "mediumDate")}
              </span>
            </span>
          : null}
        <br />
        {work.currentLocation.until
          ? <span>
              <span className="item-label">until </span>
              <span>
                {dateformat(work.currentLocation.until, "mediumDate")}
              </span>
            </span>
          : null}
      </div>
      <Link route="Work" params={{ id: work.id }}>edit</Link>
    </div>
  );
};

export default ListItem;
