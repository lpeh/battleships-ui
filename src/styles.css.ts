import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue'
  },
  font: {
    body: 'sans-serif'
  }
});

export const exampleStyle = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: 'white',
  padding: 10
});

export const gameMap = style({
  tableLayout: "fixed",
  borderCollapse: "collapse",
  fontFamily: vars.font.body,
  width: `${11*32}px`,
  height: `${11*32}px`
});

export const gameRow = style({
  height: "32px"
});

export const gameColumnHeader = style({
  background: "cadetblue",
  color: "white",
  border: "1px solid black",
  overflow: "hidden",
  width: "32px",
  height: "32px"
});

export const gameRowHeader = style({
  background: "cadetblue",
  color: "white",  
  border: "1px solid black",
  overflow: "hidden",
  width: "32px",
  height: "32px"
});

export const gameSquare = style({
  border: "1px solid black",
  overflow: "hidden",
  width: "32px",
  height: "32px",
  userSelect: "none",
  textAlign: "center"
});

export const emptySquare = style({
  background: "white",
  border: "none",
  overflow: "hidden",
  width: "32px",
  height: "32px"
});

export const gameSquareFilled = style({
  border: "1px solid black",
  overflow: "hidden",
  width: "32px",
  height: "32px",
  userSelect: "none",
  textAlign: "center",
  background: "darkgray"
});