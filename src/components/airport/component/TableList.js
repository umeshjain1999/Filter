import React from "react";
import { Table } from "../../common";
import { MainContext } from "../container/Container";
import { TableWrapper } from "./style";
const TableList = () => {
  const mainContext = React.useContext(MainContext);
  //Columns details
  const columnsConfig = mainContext?.filter?.columnList || [];
  const dataList = mainContext?.filter?.dataList;
  const formatValue = (key, value) => {
    if (key === "elevation") {
      return `${Math.round(value / 30.48)} ft`;
    }

    return value || "-";
  };
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {columnsConfig.map(({ name, label }) => (
              <th key={name}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataList && dataList.length ? (
            dataList.map((row) => {
              return (
                <tr key={row.id}>
                  {columnsConfig.map(({ name }) => {
                    return <td>{formatValue(name, row[name])}</td>;
                  })}
                </tr>
              );
            })
          ) : (
            <tr
              style={{
                background: "white",
                width: "100%",
                opacity: "0.6",
                padding: "1rem",
                fontStyle: "italic",
              }}
            >
              <td style={{ margin: "2rem 0" }}>No matching data found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default TableList;
