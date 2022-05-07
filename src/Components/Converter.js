import { useState, useRef } from "react";
import styled from "styled-components";
import { Flex, Text, Box } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

const Page = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textBox};
  transition: all 0.5s ease;
`;

function Converter(props) {
  const [tempType, setTempType] = useState("celcius");
  const [outputTemp, setOutputTemp] = useState("");
  const [egTemp, setEgTemp] = useState("e.g 25");

  const inputForm = useRef(null);

  function toggleTempType(event) {
    setTempType(event.target.id);
    if (event.target.id === "fahrenheit") {
      setEgTemp("e.g 77");
    } else {
      setEgTemp("e.g 25");
    }
    calculateTemp();
  }

  function calculateTemp() {
    const input = Number(inputForm.current.value);
    console.log(inputForm.current.value);

    if (isNaN(input)) {      
      setOutputTemp("Invalid input");
    } else if (inputForm.current.value === "") {
      setOutputTemp("");
    } else {
      if (tempType === "celcius") {
        setOutputTemp((input * 9) / 5 + 32);
      } else {
        setOutputTemp((input - 32) * (5 / 9));
      }
    }
  }

  return (
    <>
      <Page>
        <Flex mx={-1}>
          <Box width={1 / 4} px={2}>
            <Text p={1} color="background" bg="primary">
              Quarter
            </Text>
          </Box>

          <Box width={1 / 2} px={2}>
            <Flex mx={-2} mb={3}>
              <Box width={1 / 2} px={-2}>
                <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>
                  <Flex mx={2} mb={3}>
                    <Box width={1} px={2}>
                      <Label py={2} color={`${props.theme.text}`}>
                        {`Input temperature in °${
                          tempType === "celcius" ? "C" : "F"
                        } :`}
                      </Label>
                      <Input
                        type="text"
                        id="input"
                        name="input"
                        ref={inputForm}
                        placeholder={egTemp}
                        onChange={calculateTemp}                        
                      />
                    </Box>
                  </Flex>
                  <Flex mx={-2} flexWrap="wrap">
                    <Label width={[1, 1 / 2]} p={2}>
                      <Radio
                        mx={3}
                        id="celcius"
                        name="celcius"
                        value="celcius"
                        defaultChecked
                        onClick={toggleTempType}
                      />
                      <Text color={`${props.theme.text}`}>Celcius</Text>
                    </Label>
                    <Label width={[1, 1 / 2]} p={2}>
                      <Radio
                        id="fahrenheit"
                        name="celcius"
                        value="fahrenheit"
                        onClick={toggleTempType}
                      />
                      <Text color={`${props.theme.text}`}>Fahrenheit</Text>
                    </Label>
                  </Flex>
                </Box>
              </Box>

              <Box width={1 / 2} px={-2}>
                <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>
                  <Flex mx={2} mb={3}>
                    <Box width={1} px={2}>
                      <Label py={2} color={`${props.theme.text}`}>
                        {`Ouput in °${tempType === "celcius" ? "F" : "C"} :`}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        color={outputTemp === "Invalid input" ? "red" : ""}
                        defaultValue={outputTemp}
                        readOnly={true}
                      />
                    </Box>
                  </Flex>
                  <Flex mx={-2} flexWrap="wrap"></Flex>
                </Box>
              </Box>
            </Flex>

            <Text p={1} color="background" bg="primary">
              Half
            </Text>
          </Box>

          <Box width={1 / 4} px={2}>
            <Text p={1} color="background" bg="primary">
              Quarter
            </Text>
          </Box>
        </Flex>
      </Page>
    </>
  );
}

export default Converter;
