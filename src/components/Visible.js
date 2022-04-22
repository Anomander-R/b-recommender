import React, { Fragment } from "react";

function Visible({ ended, children }) {
  if (ended) {
    return <div>{children}</div>;
  } else {
    return null;
  }
}

export default Visible;