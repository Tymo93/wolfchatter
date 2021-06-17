import { Controller, Get, Param } from '@nestjs/common'
import { Messages } from '../entity/messages'
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('all/:id')
  findAll(@Param('id') marker_id: string): Promise<Messages[]> {
    return this.messagesService.findAll(marker_id)
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Messages> {
    return this.messagesService.findOne(id)
  }
}
