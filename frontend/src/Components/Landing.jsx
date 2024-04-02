import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Stack, Text } from '@chakra-ui/react';
import { EditIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Rooms from '../routes/rooms';

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
            <Link to="register">
              <Button
                size="lg"
                leftIcon={<EditIcon />}
                colorScheme="green"
                variant="solid"
              >
                Register
              </Button>
            </Link>
            <Link to="login">
              <Button
                size="lg"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="green"
                variant="outline"
              >
                Login
              </Button>
            </Link>
          </Stack>
          <Box>
            {}
          </Box>
        </Box>
      </Container>
    );
  }
  
  export default Landing;
  