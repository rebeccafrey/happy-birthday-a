import React from 'react'
import anikaBday from './anika-bday.png'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Celebration() {
  return (
    <>
      <main>
        <img src={anikaBday} alt="Geburtstagswünsche" />
        <StrengthsSection>
          <h2>
            Was ich an dir schätze (und warum es ziemlich cool ist, dass es dich
            gibt):
          </h2>
          <ListStyled>
            <TagsStyled>motivierend</TagsStyled>
            <TagsStyled>treu</TagsStyled>
            <TagsStyled>kreativ</TagsStyled>
            <TagsStyled>Gott-liebend</TagsStyled>
            <TagsStyled>offen</TagsStyled>
            <TagsStyled>unterstützend</TagsStyled>
            <TagsStyled>verletzlich</TagsStyled>
            <TagsStyled>stark</TagsStyled>
            <TagsStyled>selbstbewusst</TagsStyled>
            <TagsStyled>witzig</TagsStyled>
            <TagsStyled>ernst</TagsStyled>
            <TagsStyled>ruhend</TagsStyled>
            <TagsStyled>motiviert</TagsStyled>
            <TagsStyled>wissbegierig</TagsStyled>
            <TagsStyled>ehrlich</TagsStyled>
            <TagsStyled>Menschen-liebend</TagsStyled>
            <TagsStyled>freundlich</TagsStyled>
            <TagsStyled>bestimmt</TagsStyled>
            <TagsStyled>tatkräftig</TagsStyled>
            <TagsStyled>fleißig</TagsStyled>
            <TagsStyled>gewissenhaft</TagsStyled>
            <TagsStyled>stabil</TagsStyled>
            <TagsStyled>interessiert</TagsStyled>
            <TagsStyled>zuverlässig</TagsStyled>
            <TagsStyled>sportlich</TagsStyled>
            <TagsStyled>positiv</TagsStyled>
            <TagsStyled>mitfühlend</TagsStyled>
            <TagsStyled>ambivertiert</TagsStyled>
            <TagsStyled>entspannt</TagsStyled>
            <TagsStyled>nachdenklich</TagsStyled>
            <TagsStyled>konstruktiv</TagsStyled>
            <TagsStyled>kritikfähig</TagsStyled>
            <TagsStyled>zufrieden</TagsStyled>
            <TagsStyled>...</TagsStyled>
          </ListStyled>
        </StrengthsSection>
        <p>
          Oha, da könnte ich sicher noch weiter machen... aber vielleicht:
          Lieber...
        </p>
        <ButtonStyled as={NavLink} to="lets-celebrate/your-day">
          ...zum nächsten gehen...
        </ButtonStyled>
      </main>
    </>
  )
}

const StrengthsSection = styled.section`
  margin: 12px;
  text-align: center;
`
const TagsStyled = styled.li`
  display: inline-block;
  border: thin solid;
  border-color: var(--primary);
  padding: 10px;
  margin: 5px;
  align-items: center;
`
const ListStyled = styled.ul`
  margin-bottom: 24px;
`
const ButtonStyled = styled.button`
  padding: 24px;
  text-decoration: none;
  background: var(--bordeaux);
  font-size: 1em;
  font-family: Montserrat;
  color: white;
  display: block;
  margin: 12px auto;
  text-align: center;
  width: 70%;
  box-shadow: -4px 5px 8px 0 rgba(67, 86, 100, 0.12),
    -1px 2px 4px 0 rgba(67, 86, 100, 0.1);
  cursor: default;
`
