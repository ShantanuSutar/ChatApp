import React from "react";
import { HStack, Avatar, Text } from "@chakra-ui/react";

const Message = ({ text, uri, user = "other" }) => {
  return (
    <HStack
      alignSelf={"flex-end"}
      bg={"gray.300"}
      paddingX="4"
      paddingY={2}
      borderRadius={"base"}
    >
      <Text>{text}</Text>
      <Avatar src={uri} />
    </HStack>
  );
};

export default Message;
