
import {
  RouterProvider,
} from "react-router-dom";
import viewRoutes from './ViewRoutes';
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={viewRoutes}/>
      </ChakraProvider>
    </>
  )
}

export default App
