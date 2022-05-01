import { Flex, Text, Box} from "rebass";

function NavBar(props) {
  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <Text p={2} fontWeight="bold">
        Temperature Converter
      </Text>
      <Box mx="auto" />
      <Text p={2} fontWeight="bold">
        Toggle Theme
      </Text>
    </Flex>
  );
}

export default NavBar;
