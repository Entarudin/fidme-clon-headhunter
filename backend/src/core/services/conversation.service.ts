import { Injectable, Scope } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  Conversation,
  ConversationDocument,
} from 'src/domain/conversation/conversation.schema';
import { CreateConversationDto } from 'src/dtos/create-conversation.dto';
import { QueryParamsConversation } from 'src/dtos/queryParams-getConversation.dto';
import { Message, MessageDocument } from 'src/domain/message/message.schema';

@Injectable({ scope: Scope.REQUEST })
export class ConversationService {
  constructor(
    @InjectModel(Conversation.name)
    private conversationModel: Model<ConversationDocument>,
    @InjectModel(Message.name)
    private messageModel: Model<MessageDocument>,
  ) {}

  async create(dto: CreateConversationDto) {
    const excitingConversation = await this.conversationModel.findOne({
      members: { $all: [dto.senderId, dto.receiverId] },
    });

    if (excitingConversation) {
      return excitingConversation;
    }

    const conversation = await this.conversationModel.create({
      members: [dto.senderId, dto.receiverId],
    });

    return conversation.save();
  }

  async getConversationByUserId(userId: string): Promise<Conversation[]> {
    const conversations = await this.conversationModel.find({
      members: { $in: [userId] },
    });

    return conversations;
  }

  async getConversationByTwoUsers(
    dto: QueryParamsConversation,
  ): Promise<Conversation> {
    const conversation = await this.conversationModel.findOne({
      members: { $all: [dto.firstUserId, dto.secondUserId] },
    });

    return conversation;
  }

  async deleteConversationAndMessage(conversationId: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const messages = await this.messageModel.deleteMany({
      conversationId: conversationId,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const conversation = await this.conversationModel.findByIdAndDelete(
      conversationId,
    );

    return 'Conversation and messages have been successfully deleted';
  }
}
