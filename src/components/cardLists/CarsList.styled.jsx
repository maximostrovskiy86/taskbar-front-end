import styled from "styled-components";

export const CardListContainer = styled.ul`
  //Grid box
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 20px;

  //Flex box
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: center;
  //gap: 20px;

  .card-list-item {
    //Grid box
    margin: 0 auto;

    //Flex box
    //flex-basis: calc((100% - 60px) / 4);
  }

  @media screen and (min-width: 768px) {
    //Grid box
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

    //Flex box
    //justify-content: start;
  }
`;
