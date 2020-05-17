import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root {
    --black: #000;
    --teal: #1e847f;
    --bordeaux: #461013;
    display: grid;
    grid-template-rows: 96px auto 48px;
  }

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Montserrat;
    font-weight: 200;
    line-height: 1.5;
    color: var(--black);
  }
  
  h2 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 24px;
  }
  
  p {
    text-align: center;
    margin-bottom: 12px;
  }

  header {
     grid-row: 1/2;
  }

  main {
    grid-row: 2/3;
    height:100%;
    overflow: scroll;
    padding: 100px 12px 36px;

  }
  
  footer {
    height: 32px;
    width:100%;
    text-align: center;
    grid-row: 3/4;
    position: fixed;
    bottom: 0;
    background: white;
  }

  img {
    width: 100%;
    padding: 12px;
    }
`
