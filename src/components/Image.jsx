import React from "react";

export default function Image(props) {
  return (
    <div className={props.className}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}
