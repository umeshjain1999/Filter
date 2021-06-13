import styled, { css } from "styled-components";
import { colors } from "../styles";

const StyledTable = styled.table`
  ${(props) => css`
    width: 100%;
    max-width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

    th,
    td {
      color: ${colors.colorsPrimary};
      display: table-cell;
      vertical-align: top;
    }

    thead {
      th,
      td {
        text-align: left;
        padding: 2rem 1rem;
        font-weight: 900;
        background: ${colors.colorSecondary};
      }
    }
    tr {
      td {
        text-align: left;
        padding: 2rem 1rem;
      }
    }

    th:last-child,
    td:last-child {
      border-right: none;
      overflow: visible;
    }
    tbody {
      tr:nth-child(odd) {
        background: ${colors.rowColor1};
      }
      tr:nth-child(even) {
        background: ${colors.rowColor2};
      }
    }
    tr {
      td {
        p {
          max-width: 130px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    thead {
      tr {
        th {
          top: 0;
          position: sticky;
          z-index: 100;
        }
      }
    }

    @media (min-width: 1170px) {
      th,
      td {
        padding: 0.6rem 0.2rem;
      }
    }
  `};
`;

export default StyledTable;
