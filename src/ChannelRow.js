import { Avatar } from "@material-ui/core";
import React from "react";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
export default function ChannelRow({
  image,
  Channel,
  verified,
  subs,
  noofvideos,
  description
}) {
  return (
    <div className="channelrow">
      <Avatar className="channelrow_logo" alt={Channel} src={image} />
      <div className="channelrow_txt">
        <h4>
          {Channel}
          {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} Subscribers . {noofvideos} videos{" "}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
