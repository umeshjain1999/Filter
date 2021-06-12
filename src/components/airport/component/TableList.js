import React from "react";
import { Table } from "../../common";
import { MainContext } from "../container/Container";
import { TableWrapper } from "./style";
const TableList = () => {
  const mainContext = React.useContext(MainContext);
  const dispatch = mainContext?.dispatch;
  //All json data
  const allData = mainContext?.filter?.dataList;
  //To track pagination
  const currentPage = mainContext?.filter?.currentPage || 1;
  //Columns details
  const columnsConfig = mainContext?.filter?.columnList || [];
  //Pagination operation
  const indexOfLast = currentPage * 4;
  const indexOfFirst = indexOfLast - 4;
  const dataList = allData.slice(indexOfFirst, indexOfLast);

  React.useEffect(() => {
    if (currentPage >= 1) {
      dispatch({
        type: "UPDATED_INDEX",
        value: { first: indexOfFirst, last: indexOfLast },
      });
    }
  }, [currentPage]);
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
          {dataList &&
            dataList.map((row) => {
              return (
                <tr>
                  {columnsConfig.map(({ name }) => {
                    return <td>{formatValue(name, row[name])}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default TableList;
