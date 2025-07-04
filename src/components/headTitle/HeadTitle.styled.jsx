import styled from "styled-components";

export const HeadTitleStyle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 26px;
  text-align: left;

  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
