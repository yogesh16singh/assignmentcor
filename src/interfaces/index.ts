export interface MessageProps {
  profileImage: string;
  message: string;
}

export interface Sender {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  sender: Sender;
  time: Date;
}

export interface ChatApiResponse {
  chats: {
    id: string;
    message: string;
    sender: Sender;
    time: string;
  }[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}
