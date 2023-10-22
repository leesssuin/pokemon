import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #efd48d;
  padding: 0.75rem 0;
  text-align: center;
`;

export function Header() {
  return (
    <HeaderContainer>
      <h1>포켓몬도감</h1>
    </HeaderContainer>
  );
}
