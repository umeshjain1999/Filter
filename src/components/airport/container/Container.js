import React from "react";
import { Main } from "../component";
import { airportJson } from "./data";
import { columnsJson } from "./columns";
export const MainContext = React.createContext();

const initialState = {
  //types
  small: false,
  medium: false,
  large: false,
  heliport: false,
  closed: false,
  inYourFav: false,
  // count of selected type
  selectedType: 0,
  // search input
  search: "",
  searchData: null,
  allData: [],
  dataList: [],
  dataListCount: 0,
  columnList: columnsJson,
  currentPage: 1,
  perPageCount: 4,
  first: 1,
  last: 4,
};

const onPageChange = (state, page) => {
  const indexOfLast = page * state.perPageCount;
  const indexOfFirst = indexOfLast - state.perPageCount;
  let dataList = [];
  if (state.searchData) {
    dataList = state.searchData.slice(indexOfFirst, indexOfLast);
  } else {
    dataList = state.allData.slice(indexOfFirst, indexOfLast);
  }
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
//based on fields based
const searchFilter = (findValue, data, fields) => {
  const aData = data.filter((item) => {
    const fData = fields.map((fItem) => {
      return item[fItem];
    });
    let check = fData && fData.toString().toLowerCase();
    return check.includes(findValue.toLowerCase());
  });
  return aData;
};

//exclude passed fields
const searchFilterReverse = (findValue, data, fields) => {
  const aData = data.filter((item) => {
    const fData = fields.map((fItem) => {
      return item[fItem];
    });
    let check = fData && fData.toString().toLowerCase();
    return !check.includes(findValue.toLowerCase());
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
      searchData: aData,
      dataListCount: aData.length,
      dataList: aData.slice(0, state.perPageCount),
      currentPage: 1,
    };
  } else {
    if (state.selectedType <= 0) {
      return {
        ...state,
        [e.target.name]: findValue,
        allData: airportJson,
        searchData: null,
        dataListCount: airportJson.length,
        dataList: airportJson.slice(0, state.perPageCount),
        currentPage: 1,
      };
    } else {
      return {
        ...state,
        [e.target.name]: findValue,
        allData: state.allData,
        searchData: null,
        dataListCount: state.allData.length,
        dataList: state.allData.slice(0, state.perPageCount),
        currentPage: 1,
      };
    }
  }
};

const onType = (state, e, lookFor) => {
  if (e.target.checked) {
    const fData = state.searchData || airportJson;
    const aData = searchFilter(lookFor, fData, ["type"]);
    if (state.selectedType < 1) {
      return {
        ...state,
        [e.target.name]: e.target.checked,
        selectedType: 1,
        allData: aData,
        dataListCount: aData.length,
        dataList: aData.slice(0, 4),
        currentPage: 1,
      };
    } else {
      const updatedData = [...state.allData, ...aData];
      return {
        ...state,
        [e.target.name]: e.target.checked,
        selectedType: state.selectedType + 1,
        allData: updatedData,
        dataListCount: updatedData.length,
        dataList: updatedData.slice(0, 4),
        currentPage: 1,
      };
    }
  } else {
    if (state.selectedType <= 1) {
      const fData = state.searchData || airportJson;

      return {
        ...state,
        [e.target.name]: e.target.checked,
        selectedType: 0,
        allData: fData,
        dataListCount: fData.length,
        dataList: fData.slice(0, 4),
        currentPage: 1,
      };
    } else {
      const fData = state.searchData || state.allData;

      const aData = searchFilterReverse(lookFor, fData, ["type"]);
      return {
        ...state,
        [e.target.name]: e.target.checked,
        selectedType: state.selectedType - 1,
        allData: aData,
        dataListCount: aData.length,
        dataList: aData.slice(0, 4),
        currentPage: 1,
      };
    }
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_TYPE":
      const eventA = action.value;
      const lookFor = action.lookFor;
      return onType(state, eventA, lookFor);
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
