import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Text } from '@chakra-ui/react';
import { EditIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Rooms from '../routes/rooms';
import NameInput from './NameInput';

var roomsInfo = [
  {
    roomId: 1,
    roomName: "Secret Rooms",
    roomSize: 12,
  },
  {
    roomId: 3,
    roomName: "Chads",
    roomSize: 69,
  },
];


// function getChatMessages() {
//   console.log("Retrieving chat messages")
// }

function Landing() {
  // const [chatMessages, setChatMessages] = useState(() => getChatMessages());

  return (
    <Container maxW="2xl" marginTop="3rem" centerContent>
      <Box padding="5" marginBlockEnd={5}>
        <Text fontSize="3xl" paddingBlockEnd={5}>
          This is a chat app with a go backend and React front end using ChakraUI.
        </Text>
      </Box>
      <Box>
        <Stack direction="column" spacing={7}>
          <NameInput onSelectName={() => console.log("Button pressed")} />
        </Stack>
        {/* <Box> */}
        <Rooms roomsInfo={roomsInfo} />
        {/* </Box> */}
      </Box>
    </Container>
  );
}

export default Landing;
