import React from "react";
import { MenuIcon } from "../../common/icon";
import { Title, HeaderWrapper } from "./style";
const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        Filter <span>airports</span>
      </Title>
      <MenuIcon />
    </HeaderWrapper>
  );
};

export default Header;
