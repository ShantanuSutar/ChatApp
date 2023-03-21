import { useState, useEffect } from "react";
import { app } from "./firebase";
import {
  getFirestore,
  addDoc,
  collection,
  Firestore,
  serverTimestamp,
} from "firebase/firestore";

import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import Message from "./Components/Message";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { async } from "@firebase/util";

const auth = getAuth(app);
const db = getFirestore(app);

const loginHandler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const logoutHandler = () => signOut(auth);

function App() {
  const [user, setUser] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault(); // To stop the page from reloading

    try {
      await addDoc(collection(db, "Messages"), {
        text: message, // Message to be displayed
        uid: user.uid, // user id
        uri: user.photoURL, //url
        createdAt: serverTimestamp(), // Date and time
      });

      setMessage("");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const unsbscribe = () => {
      onAuthStateChanged(auth, (data) => {
        setUser(data);
      });
    };

    return () => {
      unsbscribe();
    };
  }, []);

  return (
    <Box bg={"red.50"}>
      {user ? (
        <Container height={"100vh"} bg={"white"}>
          <VStack h={"full"} padding="4">
            <Button onClick={logoutHandler} colorScheme={"red"} w={"full"}>
              Logout
            </Button>
            <VStack h={"full"} w="full" overflowY={"auto"}>
              <Message text="Sample Message" />
              <Message user="me" text="Sample Message" />
            </VStack>
            <form onSubmit={submitHandler} style={{ width: "100%" }} action="">
              <HStack>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter a message..."
                />
                <Button colorScheme={"purple"} type="submit">
                  Send
                </Button>
              </HStack>
            </form>
          </VStack>
        </Container>
      ) : (
        <VStack justifyContent={"center"} h="100vh">
          <Button onClick={loginHandler} colorScheme={"purple"}>
            Sign in with Google
          </Button>
        </VStack>
      )}
    </Box>
  );
}

export default App;
