import {
  Box
} from "@chakra-ui/react";


import { Messages } from "./Messages";
import { Header } from "./Header";
import { MessageInputArea } from "./MessageInputArea";


export const ChatScreen = () => {

  return (
    <Box width={{ base: '100vw', sm: '320px' }} border={{ sm: '1px solid black' }} borderRadius={{ sm: '22px' }} overflow='hidden' bgColor='#FAF9F4'>
      <Box height='100%' width='100%' aria-label="chat-screen" display='grid' gridTemplateRows={{ base: '120px calc(100vh - 120px)', sm: '120px 70vh' }} alignContent='space-between'>

        <Header />
        <Box display='flex' width='100%' flexDirection='column' padding='12px' paddingTop={0} justifyContent='flex-end' >
          <Messages />
          <MessageInputArea />
        </Box >

      </Box >
    </Box >
  );
}
