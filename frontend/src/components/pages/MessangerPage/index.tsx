import React, { FC, useEffect, useRef, useState } from 'react';
import { Conversation } from '../../molecules/Conversation';
import { StyledMessenger, StyledChatBox, Wrapper } from './styles';
import { useAppDispatch, useAppSelector } from '../../../store/reducers/rootReducer';
import { axiosGetConversation, saveData } from '../../../store/actions/conversationAction';
import { MessageDto, MessageModel } from '../../../models/messages';
import { io } from 'socket.io-client';
import api from '../../../api/axios';
import { Message } from '../../molecules/Message';
import { v4 as uuidv4 } from 'uuid';
import { SideBar } from '../../organisms/SideBar';

interface GetMessage {
  sender: string;
  text: string;
  createdAt: string;
  _id: string;
  conversationId: string;
}

export const MessangerPage: FC = () => {
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('id');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [arrivalMessage, setArrivalMessage] = useState<GetMessage | null>(null);
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const { conversations, currentConversation } = useAppSelector(
    ({ rootReducer }) => rootReducer.conversation
  );

  const socket = useRef(io('ws://localhost:8900'));

  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date(),
        _id: data._id,
        conversationId: data.conversationId
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentConversation?.members.includes(arrivalMessage.sender!) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentConversation]);

  useEffect(() => {
    dispatch(axiosGetConversation(userId));
  }, [dispatch, conversations]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await api.get('/message/' + currentConversation?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentConversation]);

  const handleSubmit = async (e: any) => {
    const message: MessageDto = {
      sender: userId!,
      text: newMessage,
      conversationId: currentConversation._id!
    };
    const receiverId = currentConversation.members.find((member) => member !== userId);

    socket.current.emit('sendMessage', {
      senderId: userId,
      receiverId,
      text: newMessage,
      _id: uuidv4(),
      conversationId: currentConversation._id!
    });

    try {
      const res = await api.post('/message', message);
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    socket.current.emit('addUser', userId);
  }, [userId]);

  const scrollToBittom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBittom();
  }, [messages]);

  return (
    <div>
      <SideBar />
      <Wrapper>
        <StyledMessenger>
          <StyledChatBox>
            <div className="chatBoxWrapper">
              {currentConversation._id ? (
                <>
                  <div className="chatBoxTop">
                    {messages.length > 0 &&
                      messages.map((m, index) => (
                        <div key={m._id}>
                          <Message
                            date={m.createdAt}
                            text={m.text}
                            own={m.sender === userId}
                            sender={m.sender}
                          />
                        </div>
                      ))}
                    <div ref={scrollRef} />
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      minLength={1}
                      className="chatMessageInput"
                      value={newMessage}
                      placeholder="write something..."
                      onChange={(e) => setNewMessage(e.target.value)}
                    ></textarea>
                    <button
                      className={
                        newMessage.length > 0 ? 'chatSubmitButton' : 'chatSubmitButton offButton'
                      }
                      onClick={handleSubmit}
                    >
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <span className="noConversationText">Open a conversation to start a chat.</span>
              )}
            </div>
          </StyledChatBox>
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input placeholder="Search for friends" className="chatMenuInput" />
              {conversations.length > 0 &&
                conversations.map((c) => (
                  <div key={c._id} onClick={() => dispatch(saveData(c._id, c.members))}>
                    <Conversation id={c.members.filter((item) => item !== userId).toString()} />
                  </div>
                ))}
            </div>
          </div>
        </StyledMessenger>
      </Wrapper>
    </div>
  );
};
