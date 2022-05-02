import { useState } from "react";
import { ThemeProvider } from "styled-components";

import NavBar from "./Components/NavBar.js";
import Converter from "./Components/Converter.js";

const lightTheme = {
  pageBackground: "white",
  titleColor: "purple",
  tagLineColor: "black",
};

const darkTheme = {
  pageBackground: "#282c36",
  titleColor: "tomato",
  tagLineColor: "lavender",
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <NavBar theme={theme} setTheme={setTheme} />
      <Converter theme={theme} setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;
