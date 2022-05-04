import styled from "styled-components";
import { Flex, Text, Box } from "rebass";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Toggle = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.toggleInstruction};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Instruction = styled.h2`
  color: ${(props) => props.theme.toggleInstruction};
  transition: all 0.5s ease;
  padding-right: 10px;
`;

function NavBar(props) {
  
  function toggleTheme() {
    console.log("props",props.theme.name)
    console.log("clicked")
    if (props.theme.name === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme.name === "light" ? (
      <BsFillMoonFill size={40} />
    ) : (
      <BsFillSunFill size={40} />
    );

  return (
    <>
    <Flex px={2} color="white" bg={`${props.theme.navBar}`} alignItems="center">
        <Text p={2} fontWeight="bold">
          Temperature Converter
        </Text>
        <Box mx="auto" />
        <Instruction>Click to toggle theme</Instruction>
        <Box mx={-2} p={2}>
          <Toggle onClick={toggleTheme}>{icon}</Toggle>
        </Box>
      </Flex>        
    </>
  );
}

export default NavBar;
