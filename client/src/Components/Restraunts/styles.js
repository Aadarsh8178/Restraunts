import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FullPageHeight = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ErrorMessage = styled.div`
  padding: 1rem;
  position: absolute;
  background: #ffffff;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  color: rgb(177, 5, 5);
  box-shadow: 10px 5px 40px 20px #2d1896;
  z-index: 1000;
  transform: ${({ show }) => (show ? "translateY(100%)" : "translateY(-400%)")};
  transition: all 0.4s ease-in-out;
`;

export const CardsWrapper = styled.div``;
