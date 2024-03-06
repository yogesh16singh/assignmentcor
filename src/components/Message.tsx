import { Card, Box, Text, Image } from "@chakra-ui/react";

import { MessageProps } from "../interfaces";
import VerifiedIcon from '../icons/verified.svg';

export const SentMessage = (props: MessageProps) => {
  return (
    <Box height='fit-content' display='flex' fontSize='14px' fontWeight={400} lineHeight='17.5px' gap='6px'
      justifyContent="flex-end">
      <Card display='inline-block' maxWidth='85%' bgColor='#1C63D5' boxShadow='0px 4px 8px 0px #00000014' borderRadius='12px' paddingX='8px' paddingY='8px' borderBottomRightRadius={0} textAlign='start'>
        <Text color='white'>
          {props.message}
        </Text>
      </Card>
    </Box>
  );
}

export const ResponseMessage = (props: MessageProps) => {
  return (
    <Box height='fit-content' display='flex' fontSize='14px' fontWeight={400} lineHeight='17.5px' gap='6px'>
      <Box position='relative' height='fit-content'>
        <Image
          borderRadius='50%'
          width='24px'
          height='24px'
          src={props.profileImage}
          alt="sender's dp"
          placeholder="https://freesvg.org/img/abstract-user-flat-3.png"
        />
        <Image
          width='8px'
          height='8px'
          src={VerifiedIcon}
          alt=""
          position='absolute'
          bottom={0}
          right={0}
        />
      </Box>
      <Card display='inline-block' maxWidth='85%' boxShadow='0px 4px 8px 0px #00000014' borderRadius='12px' paddingX='8px' paddingY='8px' borderTopLeftRadius={0} textAlign='start'>
        <Text >
          {props.message}
        </Text>
      </Card>
    </Box >
  );
}