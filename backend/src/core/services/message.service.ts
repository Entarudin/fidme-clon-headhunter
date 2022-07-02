import { Injectable, Scope } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from 'src/domain/message/message.schema';
import { CreateMessageDto } from 'src/dtos/create-message.dto';
import { UpdateMessageDto } from 'src/dtos/update-message.dto';
import { formatDate } from 'src/foundation/constants/date';

@Injectable({ scope: Scope.REQUEST })
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async createMessage(dto: CreateMessageDto) {
    const message = await this.messageModel.create(dto);
    return message.save();
  }

  async getMessageByConversationId(conversationId: string): Promise<Message[]> {
    const messages = await this.messageModel.find({
      conversationId: conversationId,
    });

    return messages;
  }

  async delete(id: string): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const message = await this.messageModel.findByIdAndDelete(id);

    return 'The message was successfully deleted.';
  }

  async update(id: string, dto: UpdateMessageDto): Promise<Message> {
    const updateMessage = await this.messageModel.findByIdAndUpdate(
      { _id: id },
      { text: dto.text, updatedAt: formatDate },
      { new: true },
    );

    return updateMessage;
  }
}
