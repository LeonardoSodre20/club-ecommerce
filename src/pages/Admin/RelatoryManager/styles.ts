import styled from "styled-components";

export const MainContainerAllGraphics = styled.div`
  height: 85vh;
  width: 75%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.7rem;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50px;
  right: 50px;
  animation: translateContainer 1.4s;

  @keyframes translateContainer {
    0% {
      transform: translateX(-250px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
