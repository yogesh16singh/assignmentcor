import { AbsoluteCenter, Box, Divider, Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import { ChatMessage, ChatApiResponse } from "../interfaces";
import { SentMessage, ResponseMessage } from "./Message";
import React from "react";

// Scrollable Area (w/ State, HTTP requests, Hooks)
export const Messages = () => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const [chatData, setChatData] = useState<ChatMessage[]>([]);
  const [page, setPage] = useState(0);
  const [prevScrollHeight, setPrevScrollHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch(`https://qa.corider.in/assignment/chat?page=${page}`);
        const data = await response.json() as ChatApiResponse;

        const modifiedData: ChatMessage[] = data.chats.map((chat) => {
          return {
            ...chat,
            time: new Date(chat.time),
          }
        });

        setChatData((prevChatData) => [...modifiedData, ...prevChatData]);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchChatData();
  }, [page]);

  const handleScroll = () => {
    const container = chatContainerRef.current;
    if (!container) { return }

    const isAtTop = container.scrollTop <= 1;
    if (isAtTop && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) { return }

    if (!page) {
      container.scrollTop = container.scrollHeight;
    } else {
      container.scrollTop = container.scrollHeight - prevScrollHeight;
    }
    setPrevScrollHeight(container.scrollHeight)

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };

  }, [page, chatData]);


  return (
    <Box
      ref={chatContainerRef}
      gap='16px'
      display='flex'
      flexDirection='column'
      overflowY='scroll'
      alignItems='flex-end'
      margin='auto'
      paddingY='12px'
    >
      {chatData.map((data, index) => {
        const dn = getDateTime(data.time);
        const pdn = index && getDateTime(chatData[index - 1].time);
        return (
          <React.Fragment key={`${data.id}_${data.sender.user_id}`}>
            {dn < pdn &&
              <Box position='relative' width='100%' marginY='10px'>
                <Divider />
                <AbsoluteCenter bg='#FAF9F4' px={2} fontSize='14px' opacity='60%'>
                  {true && formatDate(data.time)}
                </AbsoluteCenter>
              </Box>
            }
            {data.sender.self ?
              <SentMessage key={data.id} profileImage={data.sender.image} message={data.message} />
              : <ResponseMessage key={data.id} profileImage={data.sender.image} message={data.message} />}
          </React.Fragment>
        )
      })}
      {/* <Button>Recent messages</Button> */}
    </Box>
  )
}

function getDateTime(date: Date): number {
  return date.getTime();
}

function formatDate(date: Date): string {
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedDate = `${day} ${month}, ${hours % 12}:${(minutes < 10 ? '0' : '') + minutes} ${ampm}`;

  return formattedDate;
}