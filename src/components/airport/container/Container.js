import React from "react";
import { Main } from "../component";
import { airportJson } from "./data";
import { columnsJson } from "./columns";
export const MainContext = React.createContext();

const initialState = {
  small: false,
  medium: false,
  large: false,
  heliport: false,
  closed: false,
  inYourFav: false,
  search: "",
  dataList: airportJson,
  dataListCount: airportJson.length,
  columnList: columnsJson,
  currentPage: 1,
  //tracking table data
  first: 1,
  last: 3,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_TYPE":
      const eventA = action.value;
      return { ...state, [eventA.target.name]: eventA.target.checked };
    case "FILTER_SEARCH":
      const eventB = action.value;
      return { ...state, [eventB.target.name]: eventB.target.value };
    case "NEXT_PAGE":
      if (state.currentPage >= Math.ceil(airportJson.length) / 4) {
        return { ...state, currentPage: 1 };
      }
      return { ...state, currentPage: state.currentPage + 1 };
    case "PREV_PAGE":
      if (state.currentPage <= 1) {
        return { ...state, currentPage: 1 };
      }
      return { ...state, currentPage: state.currentPage - 1 };
    case "UPDATED_INDEX":
      if (state.currentPage === 1) {
        return { ...state, first: 1, last: 3 };
      }
      return {
        ...state,
        first: action.value.first,
        last: action.value.last - 1,
      };
    default:
      return state;
  }
};
const Container = () => {
  const [filter, dispatch] = React.useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={{ filter, dispatch }}>
      <Main />
    </MainContext.Provider>
  );
};

export default Container;
