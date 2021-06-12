import React from "react";
import { Wrapper } from "./style";
import Header from "./Header";
import Filter from "./Filter";
import TableList from "./TableList";
import Footer from "./Footer";
const List = () => {
  return (
    <Wrapper>
      <Header />
      <Filter />
      <TableList />
      <Footer />
    </Wrapper>
  );
};

export default List;
