import React from "react";
export default function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image
}) {
  return (
    <div className="videorow">
      <img src={image} alt="" />
      <div className="videorow_txt">
        <h3>{title}</h3>
        <p className="videorow_headline">
          {channel} .
          <span className="videorow_subs">
            <span className="videorow_subsnumber">{subs}</span>Subscribers{" "}
          </span>{" "}
          {views} views .{timestamp}
        </p>
        <p className="videorow_description">{description}</p>
      </div>
    </div>
  );
}
