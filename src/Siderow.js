import React from "react";
export default function Siderow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebar_icon" />
      <h2 className="sidebar_title"> {title}</h2>
    </div>
  );
}
