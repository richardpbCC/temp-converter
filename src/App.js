import { useState } from "react";
import { ThemeProvider } from "styled-components";

import NavBar from "./Components/NavBar.js";
import Converter from "./Components/Converter.js";

// const lightTheme = {
//   pageBackground: "white",
//   navBar: "#282c36",
//   toggleInstruction: "purple",
//   text: "black",
// };

// const darkTheme = {
//   pageBackground: "#282c36",
//   navBar: "black",
//   toggleInstruction: "tomato",
//   text: "lavender",
// };

const themes = {
  light: {
    name: "light",
    pageBackground: "white",
    navBar: "green",
    toggleInstruction: "purple",
    text: "black",
  },
  dark: {
    name: "dark",
    pageBackground: "#282c36",
    navBar: "black",
    toggleInstruction: "tomato",
    text: "lavender",
  },
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <NavBar theme={themes[theme]} setTheme={setTheme} />
      <Converter theme={theme} />
    </ThemeProvider>
  );
}

export default App;
