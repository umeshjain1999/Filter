import styled from "styled-components";
import { BsFillGridFill } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const MenuIcon = styled(BsFillGridFill)`
  cursor: pointer;
  font-size: 1.5rem;
`;

const CheckIcon = styled(GiCheckMark)`
  color: white;
  font-size: 0.7rem;
`;

const RightArrowIcon = styled(FaArrowRight)`
  cursor: pointer;
  font-size: 2rem;
`;
const LeftArrowIcon = styled(FaArrowLeft)`
  cursor: pointer;
  font-size: 2rem;
`;

export { MenuIcon, CheckIcon, RightArrowIcon, LeftArrowIcon };
