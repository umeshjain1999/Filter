import React from "react";
import {
  FilterWrapper,
  Type,
  Search,
  CheckBoxGroup,
  Label,
  Input,
} from "./style";
import { Checkbox } from "../../common";
import { MainContext } from "../container/Container";
const Filter = () => {
  const mainContext = React.useContext(MainContext);
  const filter = mainContext.filter;
  const dispatch = mainContext.dispatch;
  console.log("%c FILTER Data", "font-size:2rem;color:green");
  console.log(filter);
  return (
    <FilterWrapper>
      <Type>
        <Label>Type</Label>
        <CheckBoxGroup>
          <label>
            <Checkbox
              checked={filter?.small}
              onChange={(e) => dispatch({ type: "FILTER_TYPE", value: e })}
              name="small"
            />
            <span style={{ marginLeft: 8 }}>small</span>
          </label>
          <label>
            <Checkbox
              checked={filter?.medium}
              onChange={(e) => dispatch({ type: "FILTER_TYPE", value: e })}
              name="medium"
            />
            <span style={{ marginLeft: 8 }}>medium</span>
          </label>
          <label>
            <Checkbox
              checked={filter?.large}
              onChange={(e) => dispatch({ type: "FILTER_TYPE", value: e })}
              name="large"
            />
            <span style={{ marginLeft: 8 }}>large</span>
          </label>
          <label>
            <Checkbox
              checked={filter?.heliport}
              onChange={(e) => dispatch({ type: "FILTER_TYPE", value: e })}
              name="heliport"
            />
            <span style={{ marginLeft: 8 }}>heliport</span>
          </label>
          <label>
            <Checkbox
              checked={filter?.closed}
              onChange={(e) => dispatch({ type: "FILTER_TYPE", value: e })}
              name="closed"
            />
            <span style={{ marginLeft: 8 }}>closed</span>
          </label>
          <label>
            <Checkbox
              checked={filter?.inYourFav}
              onChange={(e) => dispatch({ type: "FILTER_TYPE", value: e })}
              name="inYourFav"
            />
            <span style={{ marginLeft: 8 }}>In your favorites</span>
          </label>
        </CheckBoxGroup>
      </Type>
      <Search>
        <Label>Filter by search</Label>
        <Input
          onChange={(e) => dispatch({ type: "FILTER_SEARCH", value: e })}
          value={filter?.search}
          name="search"
        />
      </Search>
    </FilterWrapper>
  );
};

export default Filter;
