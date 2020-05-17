import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return <HeaderStyled>Let's celebrate you, Anika!</HeaderStyled>
}

const HeaderStyled = styled.header`
  background-color: var(--teal);
  color: #fff;
  height: 96px;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: center;
  position: fixed;
  z-index: 1;
  width: 100%;
`
