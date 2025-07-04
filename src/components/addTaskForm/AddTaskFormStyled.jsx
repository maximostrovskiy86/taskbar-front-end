import styled from "styled-components";

export const DiaryAddProductFormContainer = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .task-input {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input {
      width: 100%;
      height: 30px;
      border: 1px solid ${(props) => props.theme.colors.secondary};
      border-radius: 5px;
    }

    label {
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 5px;
    }
  }

  .add-task-button-box button {
    width: 120px;
    height: 30px;
    font-size: 16px;
    font-weight: 100;
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 475px;
    padding-top: 50px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;

    .add-product-item:first-of-type {
      flex-basis: 45%;
    }

    .add-product-item:last-of-type {
      flex-basis: 30%;
    }

    button {
      margin: 0 0 0 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    max-width: 500px;

    button {
      margin: 0 0 0 30px;
    }
  }
`;
