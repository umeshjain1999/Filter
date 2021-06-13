import React from "react";
import { FooterWrapper, FooterText } from "./style";
import { RightArrowIcon, LeftArrowIcon } from "../../common/icon";
import { MainContext } from "../container/Container";
const Footer = () => {
  const mainContext = React.useContext(MainContext);
  const first = mainContext?.filter?.first;
  const last = mainContext?.filter?.last;
  const count = mainContext?.filter?.dataListCount;
  const perPageCount = mainContext?.filter?.perPageCount;
  const dispatch = mainContext?.dispatch;
  return (
    <FooterWrapper>
      {count && count > perPageCount ? (
        <React.Fragment>
          <LeftArrowIcon onClick={() => dispatch({ type: "PREV_PAGE" })} />
          <FooterText>
            Showing{" "}
            <span>
              {first}-{last}
            </span>{" "}
            of <span>{count}</span> results{" "}
          </FooterText>
          <RightArrowIcon onClick={() => dispatch({ type: "NEXT_PAGE" })} />
        </React.Fragment>
      ) : (
        ""
      )}
    </FooterWrapper>
  );
};

export default Footer;
