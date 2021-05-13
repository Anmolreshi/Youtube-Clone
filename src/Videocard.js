import React from "react";
import Avatar from "@material-ui/core/Avatar";
export default function Videocard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage
}) {
  return (
    <div className="videocard">
      <img className="videocard_thumbnail" src={image} alt="video" />
      <div className="video_info">
        <Avatar className="video_avatar" alt={channel} src={channelImage} />
        <div className="video_txt">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}.{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
