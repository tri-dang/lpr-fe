import React from "react";

const Thumbnail = ({ image: { formats } }) =>
  <img src={window.innerWidth > 768 ? formats.small.url : formats.thumbnail.url} alt='' width="100%" />;

export default Thumbnail;
