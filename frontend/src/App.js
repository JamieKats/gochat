import React from 'react';
import { 
  createBrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom/dist';

import { ChakraProvider, Box } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Landing from "./Components/Landing";
import ErrorPage from './Components/error-page';
import Rooms from './routes/rooms';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Landing />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "rooms",
        element: <Rooms />,
      }
    ]
  },
]);

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="right">
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
    <Box textAlign="center" fontSize="xl">
      <RouterProvider router={router}>
      </RouterProvider>
    </Box>
    </ChakraProvider>
  );
}

export default App;
