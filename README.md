# Sudoku React App

React sudoku web application built with TypeScript. User can enter digits by clicking on cell and using picker or double clicking to use keyboard input. To start get new board press **New Game** button. To validate your inputs press **Validate**. Once the errors are shown click **Return** to remove them from board. To upload custom sudoku board click on **Upload Board** and choose JSON file.

## Updates that should be done:

- [x] implement **Redux** (to avoid `props` drilling)
- [x] use other logic to pass input coordinates (get rid of `useRef`)
- [x] use `usePopupState` Hook instead of normal `PopupState`
- [x] update styles to only use **CSS-in-JS** (eg. styled components or only MUI) not **sass**
- [x] add file fetching instead of prompt
- [x] make font responsive (KW)
- [x] remove uuid (KW)
- [ ] replace all `any` TS types
- [ ] fix picker displaying behind buttons for lower rows
- [ ] make input taking value even if already have one (KW)
- [ ] fix picker tile text alignment
- [ ] fix picker transition
