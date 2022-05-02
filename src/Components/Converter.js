import styled from "styled-components";
import { Flex, Text, Box } from "rebass";

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

const Description = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

function Converter(props) {  
  return (
    <>
      <Page>
        <Container>
          <Description>Click the toggle button to change the theme</Description>
        </Container>
      </Page>
    </>
  );
}

export default Converter;
