import React from 'react'
import anikaBday from './anika-bday.png'
import styled from 'styled-components/macro'
import { useToggle } from 'react-hooks-lib'
import { NavLink } from 'react-router-dom'

export default function GetThePartyStarted() {
  const { on, toggle } = useToggle(false)

  return (
    <>
      <main>
        <img src={anikaBday} alt="Geburtstagswünsche" />
        {on || (
          <>
            <p>Bitte verifiziere dich: </p>
            <ButtonStyled onClick={toggle}>Jepp, das bin ich!</ButtonStyled>
          </>
        )}
        {on && (
          <>
            <p>Na dann mal los. </p>
            <p>
              Heute ist dein Tag, wieder ein Jahr älter, reifer, mehr
              Lebenserfahrung, näher am Himmel.
            </p>
            <p>
              Aber ... das waren ja nun erst ein paar einführende Worte, also:
            </p>
            <p>Let's goooooo!</p>
            <ButtonStyled as={NavLink} to="lets-celebrate">
              Mir nach...!
            </ButtonStyled>
          </>
        )}
      </main>
    </>
  )
}

const ButtonStyled = styled.button`
  padding: 24px;
  text-decoration: none;
  background: var(--bordeaux);
  font-size: 1em;
  font-family: Montserrat;
  font-weight: 700;
  color: white;
  display: block;
  margin: 12px auto;
  text-align: center;
  width: 76%;
  border-radius: 8px;
  box-shadow: -4px 5px 8px 0 rgba(67, 86, 100, 0.12),
    -1px 2px 4px 0 rgba(67, 86, 100, 0.1);
  cursor: default;
`
