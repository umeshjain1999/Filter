import React from "react";
import StyledTable from "./style";

// required: false,
// striped: false,
// bordered: false,
// condensed: false,
// hover: false,
// responsive: false,
// alignTop: false

const Table = (props) => {
  return <StyledTable {...props} />;
};

export default Table;
