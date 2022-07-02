export interface MessageModel {
  _id: string;
  updatedAt?: string;
  createdAt: string;
  text: string;
  sender: string;
  conversationId: string;
}

export interface MessageDto {
  conversationId: string;
  sender: string;
  text: string;
  _id?: string;
  updatedAt?: string;
  createdAt?: string;
}
