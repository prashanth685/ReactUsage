import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  background-color: red;
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
  text-shadow: 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  &:after {
    content: "hiii";
  }
  &:hover {
    color: yellow;
    cursor: pointer;
    transition: all 1s ease-out;
  }
`;

const Styled = () => {
  return (
    <>
      <Title name="">Hello</Title>
    </>
  );
};

export default Styled;
