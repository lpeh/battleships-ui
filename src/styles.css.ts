import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue'
  },
  font: {
    body: 'sans-serif'
  }
});

const squareSize = 48
const squareWidth = `${squareSize}px`
const squareHeight = squareWidth

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
  width: `${11*squareSize}px`,
  height: `${11*squareSize}px`
});

export const gameRow = style({
  height: squareHeight
});

export const gameColumnHeader = style({
  background: "cadetblue",
  color: "white",
  border: "2px solid black",
  overflow: "hidden",
  width: squareWidth,
  height: squareHeight
});

export const gameRowHeader = style({
  background: "cadetblue",
  color: "white",  
  border: "2px solid black",
  overflow: "hidden",
  width: squareWidth,
  height: squareHeight
});

export const gameSquare = style({
  border: "2px solid black",
  overflow: "hidden",
  width: squareWidth,
  height: squareHeight,
  userSelect: "none",
  textAlign: "center"
});

export const emptySquare = style({
  background: "white",
  border: "none",
  overflow: "hidden",
  width: squareWidth,
  height: squareHeight
});

export const gameSquareFilled = style({
  border: "2px solid black",
  overflow: "hidden",
  width: squareWidth,
  height: squareHeight,
  userSelect: "none",
  textAlign: "center",
  background: "darkgray"
});