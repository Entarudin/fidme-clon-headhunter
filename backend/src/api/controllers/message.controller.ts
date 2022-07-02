import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MessageService } from 'src/core/services/message.service';
import { UpdateMessageDto } from 'src/dtos/update-message.dto';
import { CreateMessageDto } from 'src/dtos/create-message.dto';
import { NotFoundResponse } from 'src/dtos/types';
import { Message } from 'src/domain/message/message.schema';

@Controller('message')
@ApiTags('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @ApiOperation({ summary: 'Create message' })
  @ApiResponse({
    status: 200,
    description: 'The message successfully added.',
    type: [Message],
  })
  @ApiResponse({
    status: 404,
    description: 'Message creation error.',
    type: NotFoundResponse,
  })
  @Post('/')
  create(@Body() dto: CreateMessageDto) {
    return this.messageService.createMessage(dto);
  }

  @ApiOperation({ summary: 'Get message on params' })
  @ApiResponse({
    status: 200,
    description: 'The message will find successfully.',
    type: [Message],
  })
  @ApiResponse({
    status: 404,
    description: 'Find message error.',
    type: NotFoundResponse,
  })
  @Get('/:id')
  getMessagesByConversation(@Param('id') id: string) {
    return this.messageService.getMessageByConversationId(id);
  }

  @ApiOperation({ summary: 'Delete message' })
  @ApiResponse({
    status: 200,
    description: 'The message successfully deleted.',
    type: [Message],
  })
  @ApiResponse({
    status: 404,
    description: 'Message delete error.',
    type: NotFoundResponse,
  })
  @Delete('/:id')
  deleteMessage(@Param('id') id: string) {
    return this.messageService.delete(id);
  }

  @ApiOperation({ summary: 'Update message' })
  @ApiResponse({
    status: 200,
    description: 'The message successfully updated.',
    type: [Message],
  })
  @ApiResponse({
    status: 404,
    description: 'Message update error.',
    type: NotFoundResponse,
  })
  @Put('/:id')
  updateMessage(@Param('id') id: string, @Body() dto: UpdateMessageDto) {
    return this.messageService.update(id, dto);
  }
}
