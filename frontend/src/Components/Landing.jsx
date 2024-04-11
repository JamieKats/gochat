import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Text } from '@chakra-ui/react';
import { EditIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Rooms from '../routes/rooms';

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

function Landing() {
    return (
      <Container maxW="2xl" marginTop="3rem" centerContent>
        <Box padding="5" marginBlockEnd={5}>
          <Text fontSize="3xl" paddingBlockEnd={5}>
            This is a chat app with a go backend and React front end using ChakraUI.
          </Text>
        </Box>
        <Box>
          <Stack direction="row" spacing={7}>
            
            <Button
              size="lg"
              leftIcon={<EditIcon />}
              colorScheme="green"
              variant="solid"
            >
              Select Name
            </Button>
          </Stack>
          {/* <Box> */}
            <Rooms roomsInfo={roomsInfo}/>
          {/* </Box> */}
        </Box>
      </Container>
    );
  }
  
  export default Landing;
  