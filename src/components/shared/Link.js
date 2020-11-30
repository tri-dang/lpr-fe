import React from 'react';
import { Link as ReactLink } from "react-router-dom";

export const linkStyles = {
  color: 'inherit',
  textDecoration: 'inherit'
};

const Link = props => (
  <ReactLink style={linkStyles} {...props} />
);

export default Link;
