import { useState } from "react";
import { ThemeProvider } from "styled-components";

import NavBar from "./Components/NavBar.js";
import Converter from "./Components/Converter.js";

const themes = {
  light: {
    name: "light",
    pageBackground: "white",
    navBar: "#282c36",
    title: "blueviolet",
    text: "#6363CE",
  },
  dark: {
    name: "dark",
    pageBackground: "#282c36",
    navBar: "black",
    title: "tomato",
    text: "lavender",
  },
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <NavBar theme={themes[theme]} setTheme={setTheme} />
      <Converter theme={themes[theme]} />
    </ThemeProvider>
  );
}

export default App;
