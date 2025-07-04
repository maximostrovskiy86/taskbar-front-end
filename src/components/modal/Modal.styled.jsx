import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding-right: 15px;
  padding-left: 15px;

  height: calc(100vh - 50%);
  width: calc(100vw - 20px);

  background-color: #ffffff;
  //opacity: 0;
  //visibility: hidden;
  border: 2px solid ${(p) => p.theme.colors.primary};
  transform: translate(-50%, -50%);

  .modal-header {
    padding: 5px 15px;
    margin-right: -15px;
    margin-left: -15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 580px;
  }

  @media screen and (min-width: 1200px) {
    width: 690px;
    height: 580px;
  }
`;
