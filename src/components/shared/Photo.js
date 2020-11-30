import React from "react";

export const Photo = ({ picture, title }) =>
  picture && <img src={picture.url} alt={title} width="100%" />;
