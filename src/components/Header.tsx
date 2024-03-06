import { Button, chakra, Box, Text, Image } from "@chakra-ui/react";

import { FaRegEdit } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import HeaderLogo from '../icons/header-logo.svg';
import { InfoPopover } from "./AttachmentPopover";

export const Header = () => {
  return (
    <Box aria-label="contact-header" display='grid' padding='12px' paddingBottom={0} borderBottom='1px solid' borderColor='rgba(229, 229, 224, 1)'>
      <Box display='flex' alignItems='center' justifyContent='space-between' fontSize='x-large'>
        <Box display='flex' gap='10px' alignItems='center'>
          <Button size='18px' borderRadius='100%' bg='transparent' _hover={{ bg: 'transparent' }} onClick={() => window.history.back()}>
            <IoMdArrowBack aria-label="back-button" />
          </Button>
          <Text fontWeight={600} _selection={{ 'user-select': 'none' }}>Trip 1</Text>
        </Box>
        <FaRegEdit />
      </Box>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' gap='16px'>
          <Image width='48px' height='48px' src={HeaderLogo} alt="header logo" />
          <Box display='grid' fontSize='16px' gap={0} textAlign='start'>
            <Text>From <chakra.span fontWeight={600}>IGI Airport, T3</chakra.span></Text>
            <Text>To <chakra.span fontWeight={600}>Sector 28</chakra.span></Text>
          </Box>
        </Box>
        <InfoPopover />
      </Box>
    </Box>
  );
}