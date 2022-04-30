import "./App.css";
import { useState } from "react";
import ThemeToggle from "./Components/ThemeToggle.js";
import { ThemeProvider } from "styled-components";

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
      <ThemeToggle theme={theme} setTheme={setTheme} />      
    </ThemeProvider>
  );
}

export default App;
