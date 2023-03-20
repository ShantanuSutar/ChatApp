import { Box, Button, Container, VStack } from "@chakra-ui/react";

function App() {
  return (
    <Box bg={"red.50"}>
      <Container height={"100vh"} bg={"white"}>
        <VStack h={"full"} bg={"telegram.100"}>
          <Button colorScheme={"red"} w={"full"}>
            Logout
          </Button>
          <VStack bg={"purple.100"}></VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
