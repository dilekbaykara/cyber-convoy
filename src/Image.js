import React from "react";

function Image(props) {
  return (
    <div id="images">
      <img src={props.urls.full} alt={props.user.name} />
    </div>
  );
}

export default Image;
