import {
  Popover, PopoverTrigger, Button,
  PopoverContent, PopoverArrow, PopoverBody, Image,
  chakra,
  Text
} from "@chakra-ui/react";

import { GrAttachment } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";

import CameraIcon from '../icons/camera.svg';
import VideoIcon from '../icons/video.svg';
import DocIcon from '../icons/doc.svg';
import UserIcon from '../icons/user.svg';
import TelephoneIcon from '../icons/telephone.svg';
import ReportIcon from '../icons/report.svg';

export const AttachmentPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button size='18px' borderRadius='100%' bg='transparent' _hover={{ bg: 'transparent' }}>
          <GrAttachment />
        </Button>
      </PopoverTrigger>
      {/* <Portal> */}
      <PopoverContent width='fit-content' bg='transparent' boxShadow={0} border={0} _focus={{ border: 0, boxShadow: 0, bg: 0 }}>
        <PopoverArrow bg='#008000' />
        <PopoverBody padding='12px 16px' display='flex' gap='14px' width='fit-content' bg='#008000' borderRadius={999} marginRight={2}>
          <button>
            <Image width='20px' src={CameraIcon} alt="cameraiconbtn" />
          </button>
          <button>
            <Image width='20px' src={VideoIcon} alt="VideofIconbtn" />
          </button>
          <button>
            <Image width='18px' src={DocIcon} alt="DocIconbtn" />
          </button>
        </PopoverBody>
      </PopoverContent>
      {/* </Portal> */}
    </Popover >
  );
}

export const InfoPopover = () => {
  const handleInfoButton = () => { }

  return (
    <Popover>
      <PopoverTrigger>
        <Button size='18px' borderRadius='100%' bg='transparent' _hover={{ bg: 'transparent' }} onClick={handleInfoButton}>
          <BsThreeDotsVertical aria-label="info-button" size='24px' />
        </Button>
      </PopoverTrigger>
      {/* <Portal> */}
      <PopoverContent width='fit-content' bg='transparent' boxShadow={0} border={0} _focus={{ border: 0, boxShadow: 0, bg: 0 }}>
        <PopoverBody
          gap='14px'
          width='fit-content'
          display='flex'
          marginRight={2}
          padding='12px 16px'
          flexDirection='column'
          backgroundColor='white'
          borderRadius='8px'
          boxShadow='0px 4px 8px 0px #0000001F'
        >
          <chakra.button padding={1} display='flex' justifyContent='start' alignItems='center' gap={2}>
            <Image width='20px' src={UserIcon} alt="UserIcon" />
            <Text fontSize='16px'>Members</Text>
          </chakra.button>
          <chakra.button padding={1} display='flex' justifyContent='start' alignItems='center' gap={2}>
            <Image width='20px' src={TelephoneIcon} alt="TelephoneIcon" />
            <Text fontSize='16px'>Share Number</Text>
          </chakra.button>
          <chakra.button padding={1} display='flex' justifyContent='start' alignItems='center' gap={2}>
            <Image width='18px' src={ReportIcon} alt="ReportIcon" />
            <Text fontSize='16px'>Report</Text>
          </chakra.button>
        </PopoverBody>
      </PopoverContent>
      {/* </Portal> */}
    </Popover >
  );
}