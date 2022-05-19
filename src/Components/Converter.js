import { useState, useRef } from "react";
import styled from "styled-components";
import { Flex, Text, Box } from "rebass";
import { Label, Input, Radio } from "@rebass/forms";

const Page = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textBox};
  transition: all 0.5s ease;
`;

function Converter(props) {
  const [outputTemp, setOutputTemp] = useState("");
  const [egTemp, setEgTemp] = useState("e.g 25");

  const inputForm = useRef(null);
  const radioButton = useRef({ checked: true });

  function toggleTempType(event) {
    if (event.target.id === "fahrenheit") {
      setEgTemp("e.g 77");
    } else {
      setEgTemp("e.g 25");
    }
    calculateTemp();
  }

  function calculateTemp() {
    const input = Number(inputForm.current.value);

    if (isNaN(input)) {
      setOutputTemp("Invalid input");
    } else if (inputForm.current.value === "") {
      setOutputTemp("");
    } else {
      if (radioButton.current.checked === true) {
        setOutputTemp((input * 9) / 5 + 32);
      } else {
        setOutputTemp((input - 32) * (5 / 9));
      }
    }
  }

  return (
    <>
      <Page>
        <Flex flexWrap="wrap" mx="auto" alignItems="center">
          <Box px={2} mx="auto">
            <Flex mb={3}>
              <Box width={1} px={-2}>
                <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>
                  <Flex mx={2} mb={3}>
                    <Box width={1} px={2}>
                      <Label py={2} color={`${props.theme.text}`}>
                        {`Input temp in °${
                          radioButton.current.checked === true ? "C" : "F"
                        } :`}
                      </Label>
                      <Input
                        type="text"
                        id="input"
                        name="input"
                        ref={inputForm}
                        placeholder={egTemp}
                        onChange={calculateTemp}
                        width={1 / 2}
                        minWidth={150}
                      />
                    </Box>
                  </Flex>
                  <Flex minWidth={200}>
                    <Label p={2}>
                      <Radio
                        mx={2}
                        id="celcius"
                        name="celcius"
                        value="celcius"
                        defaultChecked
                        ref={radioButton}
                        onClick={toggleTempType}
                      />
                      <Text color={`${props.theme.text}`}>Celcius</Text>
                    </Label>
                    <Label p={2}>
                      <Radio
                        mx={1}
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
                  <Flex mx={-4} mb={3}>
                    <Box width={1} px={-2}>
                      <Label py={2} color={`${props.theme.text}`}>
                        {`Ouput in °${
                          radioButton.current.checked === true ? "F" : "C"
                        } :`}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        color={outputTemp === "Invalid input" ? "red" : ""}
                        defaultValue={outputTemp}
                        readOnly={true}
                        width={1 / 2}
                        minWidth={150}
                      />
                    </Box>
                  </Flex>
                  <Flex mx={-2} flexWrap="wrap"></Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Page>
    </>
  );
}

export default Converter;
