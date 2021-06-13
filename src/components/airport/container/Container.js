import React from "react";
import { Main } from "../component";
import { airportJson } from "./data";
import { columnsJson } from "./columns";
export const MainContext = React.createContext();

const initialState = {
  // type: {
  small: false,
  medium: false,
  large: false,
  heliport: false,
  closed: false,
  inYourFav: false,
  // },
  search: "",
  allData: [],
  dataList: [],
  dataListCount: 0,
  columnList: columnsJson,
  currentPage: 1,
  perPageCount: 4,
  //tracking table data
  first: 1,
  last: 4,
};

const onPageChange = (state, page) => {
  const indexOfLast = page * state.perPageCount;
  const indexOfFirst = indexOfLast - state.perPageCount;
  const dataList = airportJson.slice(indexOfFirst, indexOfLast);
  let first, last;
  first = indexOfFirst + 1;
  last = indexOfLast;
  const paginationData = {
    indexOfFirst,
    indexOfLast,
    page,
  };
  localStorage.setItem("CURRENT_PAGE", JSON.stringify(paginationData));
  return {
    ...state,
    currentPage: page,
    dataList: dataList,
    first: first,
    last: last,
  };
};

const searchFilter = (findValue, data, fields) => {
  const aData = data.filter((item) => {
    const fData = fields.map((fItem) => {
      return item[fItem];
    });
    let check = fData.toString();
    if (check.includes(findValue)) return item;
  });
  return aData;
};

const onSearch = (state, e) => {
  const fields = ["name", "icao", "iata", "elevation", "latitude", "longitude"];
  const findValue = e.target.value;

  if (findValue && findValue.length > 0) {
    const aData = searchFilter(findValue, state.allData, fields);
    return {
      ...state,
      [e.target.name]: findValue,
      allData: aData,
      dataListCount: aData.length,
      dataList: aData.slice(0, state.perPageCount),
      currentPage: 1,
    };
  } else {
    return {
      ...state,
      [e.target.name]: findValue,
      allData: airportJson,
      dataListCount: airportJson.length,
      dataList: airportJson.slice(0, state.perPageCount),
      currentPage: 1,
    };
  }
};

const onType = (state, e) => {
  if (e.target.checked) {
    const aData = searchFilter(e.target.name, state.allData, ["type"]);
    return {
      ...state,
      [e.target.name]: e.target.checked,
      allData: aData,
      dataListCount: aData.length,
      dataList: aData.slice(0, 4),
      currentPage: 1,
    };
  } else {
    return {
      ...state,
      [e.target.name]: e.target.checked,
      allData: airportJson,
      dataListCount: airportJson.length,
      dataList: airportJson.slice(0, 4),
      currentPage: 1,
    };
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_TYPE":
      const eventA = action.value;
      // return onType(state, eventA);
      return {
        ...state,
        [eventA.target.name]: eventA.target.checked,
      };
    case "FILTER_SEARCH":
      const eventB = action.value;
      return onSearch(state, eventB);
    case "NEXT_PAGE":
      if (
        state.currentPage >=
        Math.ceil(airportJson.length) / state.perPageCount
      ) {
        return onPageChange(state, 1);
      }
      return onPageChange(state, state.currentPage + 1);
    case "PREV_PAGE":
      if (state.currentPage <= 1) {
        return onPageChange(state, 1);
      }
      return onPageChange(state, state.currentPage - 1);
    case "INITIAL":
      const aData = action.value;

      if (localStorage.getItem("CURRENT_PAGE")) {
        const paginationData = JSON.parse(localStorage.getItem("CURRENT_PAGE"));
        const indexOfLast = paginationData?.indexOfLast;
        const indexOfFirst = paginationData?.indexOfFirst;
        const page = paginationData?.page;
        return {
          ...state,
          allData: aData,
          dataListCount: aData.length,
          dataList:
            indexOfFirst && indexOfLast
              ? aData.slice(indexOfFirst, indexOfLast)
              : aData.slice(0, state.perPageCount),
          currentPage: page || 1,
          first: indexOfFirst ? indexOfFirst + 1 : 1,
          last: indexOfLast || state.perPageCount,
        };
      }

      return {
        ...state,
        allData: aData,
        dataListCount: aData.length,
        dataList: aData.slice(0, state.perPageCount),
        currentPage: localStorage.getItem("CURRENT_PAGE") || 1,
        first: 1,
        last: state.perPageCount,
      };
    default:
      return state;
  }
};
const Container = () => {
  const [filter, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    dispatch({ type: "INITIAL", value: airportJson });
  }, []);
  return (
    <MainContext.Provider value={{ filter, dispatch }}>
      <Main />
    </MainContext.Provider>
  );
};

export default Container;
