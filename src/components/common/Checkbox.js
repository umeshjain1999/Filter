import React from "react";
import styled from "styled-components";
import { CheckIcon } from "./icon";
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "black" : "white")};
  border: 1px solid black;
  border-radius: 3px;
  transition: all 150ms;
  text-align: center;
  padding: 0.1rem;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  }

  ${CheckIcon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <CheckIcon />
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
