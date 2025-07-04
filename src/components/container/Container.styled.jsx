import styled from "styled-components";

export const StyleContainer = styled.div`
  width: 290px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 480px) {
    width: 450px;
  }

  @media screen and (min-width: 768px) {
    width: 670px;
  }

  @media screen and (min-width: 1280px) {
    width: 1140px;
  }
`;
