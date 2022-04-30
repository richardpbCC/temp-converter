import styled from "styled-components";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all . 5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Toggle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Instruction = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;

const Description = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

function ThemeToggle(props) {
  function toggleTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? (
      <BsFillMoonFill size={40} />
    ) : (
      <BsFillSunFill size={40} />
    );

  return (
    <Page>
      <Container>
        <Toggle onClick={toggleTheme}>{icon}</Toggle>
        <Instruction>Toggle Theme</Instruction>
        <Description>Click the toggle button to change the theme</Description>
      </Container>
    </Page>
  );
}

export default ThemeToggle;
