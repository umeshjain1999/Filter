import styled from "styled-components";
import { BsFillGridFill } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { colors } from "./styles";
const MenuIcon = styled(BsFillGridFill)`
  cursor: pointer;
  font-size: 1.5rem;
`;

const CheckIcon = styled(GiCheckMark)`
  color: ${colors.colorSecondary};
  font-size: 0.7rem;
`;

const RightArrowIcon = styled(FaArrowRight)`
  cursor: pointer;
  font-size: 2rem;
  transition: all;
  :hover {
    transform: scale(1.1);
  }
`;
const LeftArrowIcon = styled(FaArrowLeft)`
  cursor: pointer;
  font-size: 2rem;
  transition: all;
  :hover {
    transform: scale(1.1);
  }
`;

export { MenuIcon, CheckIcon, RightArrowIcon, LeftArrowIcon };
