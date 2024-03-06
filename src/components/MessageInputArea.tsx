import { useState } from "react";
import { Box, Input, Button, Image } from "@chakra-ui/react";

import { AttachmentPopover } from "./AttachmentPopover";
import SendIcon from '../icons/send.svg';


export const MessageInputArea = () => {
  const [msgInput, setMsgInput] = useState('');

  return (
    <Box aria-label="input-footer" display='flex' width='100%' paddingY='6px' justifyContent='center' alignItems='center'>
      <Box borderRadius='10px' padding='6px' width='100%' bgColor='white' height='48px' display='flex' alignItems='center' gap='6px'>
        <Input
          border={0}
          focusBorderColor="transparent"
          placeholder="Reply to @Rohit Yadav"
          _placeholder={{
            'font-size': '14px',
            'opacity': '50%'
          }}
          value={msgInput}
          onChange={(e) => setMsgInput(e.target.value)}
        />
        <AttachmentPopover />
        <Button size='20px' borderRadius='100%' bg='transparent' _hover={{ bg: 'transparent' }} onClick={() => { }}>
          <Image aria-label="send-button" width='22px' src={SendIcon} alt="" />
        </Button>
      </Box>
    </Box >
  );
}