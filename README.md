# Sudoku React App

React sudoku web application built with TypeScript. User can enter digits by clicking on cell and using picker or double clicking to use keyboard input. To start get new board press **New Game** button. To validate your inputs press **Validate**. Once the errors are shown click **Return** to remove them from board. To fetch app with your sudoku board click on **Fetch Board** and past board as JSON string.

## Updates that should be done:

- implement **Redux** (to avoid `props` drilling)
- use other logic to pass input coordinates (get rid of `useRef`...)
- use `usePopupState` Hook instead of normal `PopupState`
- replace all `any` TS types
- update styles to only use **CSS-in-JS** (eg. styled components or only MUI) not **sass**
- add file fetching instead of prompt
