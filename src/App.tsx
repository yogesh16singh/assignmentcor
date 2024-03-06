import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react"

import { ChatScreen } from "./components/ChatScreen"
import theme from "./styles/theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bgColor='transparent'
      textAlign="center"
      fontSize="xl"
      paddingY='2rem'
      lineHeight='17.57px'
    >
      <ChatScreen />
    </Box>
  </ChakraProvider>
)