import React from "react";
import { FooterWrapper } from "./style";
import { RightArrowIcon, LeftArrowIcon } from "../../common/icon";
import { MainContext } from "../container/Container";
const Footer = () => {
  const mainContext = React.useContext(MainContext);
  const first = mainContext?.filter?.first;
  const last = mainContext?.filter?.last;
  const count = mainContext?.filter?.dataListCount;
  const dispatch = mainContext?.dispatch;
  return (
    <FooterWrapper>
      <LeftArrowIcon onClick={() => dispatch({ type: "PREV_PAGE" })} />
      <div>
        Showing{" "}
        <span>
          {first}-{last}
        </span>{" "}
        of <span>{count}</span> results{" "}
      </div>
      <RightArrowIcon onClick={() => dispatch({ type: "NEXT_PAGE" })} />
    </FooterWrapper>
  );
};

export default Footer;
