import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";

import Message from "./Components/Message";
function App() {
  return (
    <Box bg={"red.50"}>
      <Container height={"100vh"} bg={"white"}>
        <VStack h={"full"} padding="4">
          <Button colorScheme={"red"} w={"full"}>
            Logout
          </Button>
          <VStack h={"full"} w="full">
            <Message text="Sample Message" />
            <Message user="me" text="Sample Message" />
            <Message text="Sample Message" />
          </VStack>
          <form style={{ width: "100%" }} action="">
            <HStack>
              <Input placeholder="Enter a message..." />
              <Button colorScheme={"purple"} type="submit">
                Send
              </Button>
            </HStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
