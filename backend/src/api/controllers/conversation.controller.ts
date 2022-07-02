import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Query,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConversationService } from 'src/core/services/conversation.service';
import { Conversation } from 'src/domain/conversation/conversation.schema';
import { CreateConversationDto } from 'src/dtos/create-conversation.dto';
import { QueryParamsConversation } from 'src/dtos/queryParams-getConversation.dto';
import { NotFoundResponse } from 'src/dtos/types';

@Controller('conversation')
@ApiTags('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @ApiOperation({ summary: 'Create conversation' })
  @ApiResponse({
    status: 200,
    description: 'The conversation successfully added.',
    type: [Conversation],
  })
  @ApiResponse({
    status: 404,
    description: 'Conversation creation error.',
    type: NotFoundResponse,
  })
  @Post('/')
  create(@Body() dto: CreateConversationDto) {
    return this.conversationService.create(dto);
  }

  @ApiOperation({ summary: 'Find conversation for user' })
  @ApiResponse({
    status: 200,
    description: 'The conversations will find successfully',
    type: [Conversation],
  })
  @ApiResponse({
    status: 404,
    description: 'Find conversation error.',
    type: NotFoundResponse,
  })
  @Get('/:userId')
  getByUserId(@Param('userId') userId: string) {
    return this.conversationService.getConversationByUserId(userId);
  }

  @ApiOperation({ summary: 'Find a conversation for two specific users' })
  @ApiResponse({
    status: 200,
    description: 'The conversation will find successfully',
    type: [Conversation],
  })
  @ApiResponse({
    status: 404,
    description: 'Find conversation error.',
    type: NotFoundResponse,
  })
  @Get('/')
  getByTwoUsers(@Query() dto: QueryParamsConversation) {
    return this.conversationService.getConversationByTwoUsers(dto);
  }

  @ApiOperation({ summary: 'Delete conversation' })
  @ApiResponse({
    status: 200,
    description: 'The conversation successfully deleted.',
    type: [Conversation],
  })
  @ApiResponse({
    status: 404,
    description: 'Conversation delete error',
    type: NotFoundResponse,
  })
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.conversationService.deleteConversationAndMessage(id);
  }
}
