import styled from "styled-components";
import { colors } from "../../common/styles";

// main wrapper styles
export const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  margin: 1rem;
  padding: 2.5rem;
  background: ${colors.bgPrimary};
  overflow: auto;
`;
// header styles
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;
export const Title = styled.div`
  font-size: 5rem;
  font-weight: 700;
  color: ${colors.colorsPrimary};
  span {
    color: ${colors.colorSecondary};
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

//filter styles
export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* gap: 1rem; */
  padding: 1rem 0;
`;
export const Type = styled.div`
  width: 60%;
  font-weight: 700;
  color: ${colors.colorsPrimary};
`;
export const Search = styled.div`
  width: 40%;
  font-weight: 700;
  color: ${colors.colorsPrimary};
`;
export const Label = styled.div`
  font-size: 1.5rem;
`;

export const CheckBoxGroup = styled.div`
  padding-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  text-transform: capitalize;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 0.3rem 0 0.3rem;
  font-size: 1.2rem;
  border: 0;
  outline: 0;
  border-bottom: 2px solid #000000;
`;

//table styles
export const TableWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  overflow: auto;
`;

//footer styles
export const FooterWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 700;
  }
`;
