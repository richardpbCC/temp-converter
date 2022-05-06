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
  background-color: ${(props) => props.theme.title};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.title};
  padding-left: 5px;
  transition: all 0.5s ease;
  padding-right: 10px;
`;

function NavBar(props) {
  
  function toggleTheme() {    
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
        <Title>Temperature Converter</Title>
        <Box mx="auto" />
        <Box mx={-2} p={2}>
          <Toggle onClick={toggleTheme}>{icon}</Toggle>
        </Box>
      </Flex>        
    </>
  );
}

export default NavBar;
