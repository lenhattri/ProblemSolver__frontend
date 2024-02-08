import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import viewRoutes from './ViewRoutes';
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const App: FC = () => {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={viewRoutes}/>
      </ChakraProvider>
    </>
  )
}

export default App;
