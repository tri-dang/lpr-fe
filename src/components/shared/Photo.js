import React from "react";

export const Photo = ({ picture }) =>
  picture && <img src={picture.url} alt="" width="100%" />;
