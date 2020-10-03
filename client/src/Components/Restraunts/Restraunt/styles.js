import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Card = styled.div`
  display: block;
  min-width: 350px;
  max-width: 400px;
  margin: 60px auto;
  background: #ffffff;
  box-shadow: 10px 5px 40px 20px #2d1896;
  transition: 0.25s;
  overflow: hidden;
`;
export const CardHeader = styled.div`
  height: 210px;
  width: 100%;
  padding: 15px;
  width: 100%;
  background-size: cover;
  color: #fff;
  background-image: ${({ img }) => (img ? "url(" + img + ")" : "#ffffff")};
`;

export const CardBody = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 100%;
  height: 200px;
  & span {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: grey;
  }
  & p {
    padding-bottom: 40px;
    font-size: 13px;
    line-height: 1.8;
  }
  & h2 {
    margin: 0.3rem 0;
    vertical-align: middle;
  }
`;

export const Button = styled.button`
  width: 40%;
  outline: none;
  background: #341cac;
  border-color: none;
  color: white;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #2d1896;
  }
`;

export const Reviews = styled.div`
  display: flex;
  height: 270px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
  position: absolute;
  left: 0;
  bottom: 5%;
  max-height: ${({ show }) => (show ? "270px" : 0)};
  transition: all 0.3s ease-in-out;

  & span {
    margin-left: 90%;
    cursor: pointer;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d8d8d8 0% 0% no-repeat padding-box;
    border-radius: 100px;
    margin-right: 0.3rem;
  }
`;
export const Review = styled.div`
  & img {
    width: 40%;
    background-size: cover;
  }
  & p {
    width: 55%;
  }
`;
