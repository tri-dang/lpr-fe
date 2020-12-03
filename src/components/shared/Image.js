import React from "react";

const Image = ({ image: { formats } }) =>
  <img src={formats.large.url} alt='' width="100%" />;

export default Image;
