import React from 'react'
import anikaBday from './anika-bday.png'
import styled from 'styled-components'

export default function YourDay() {
  return (
    <>
      <main>
        <img src={anikaBday} alt="Geburtstagswünsche" />
        <p>Wie krass gut es ist, dich zu kennen!</p>
        <p>
          Kaum zu glauben, dass es erst ein Jahr her sein soll (na gut, etwas
          mehr), als wir das erste Mal nebeneinander saßen. Auf der Treppe. Im
          Terrace Hill. Am Ostersonntag.
        </p>
        <p>Oh happy day!</p>
        <p>
          Was in diesem Jahr schon alles passiert ist, unfassbar. Danke, dass du
          da bist.
        </p>
        <p>
          Aus Gründen (unterschiedlicher Art), gehe ich beim Aufsetzen dieser
          Seite davon aus, dass wir uns nicht sehen. Aber gefeiert wirst du
          trotzdem. Von mir, von anderen, vom Himmel. Oh, der Himmel. Yeah!
        </p>
        <ImportantText>
          Gott segne dich mit allen Reichtümern des Himmels.
        </ImportantText>
        <ImportantText>Ich liebe dich.</ImportantText>
      </main>
    </>
  )
}

const ImportantText = styled.p`
  font-weight: 700;
`
