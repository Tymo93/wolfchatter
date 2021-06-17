import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'
import { Messages } from '../entity/messages'

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private readonly messagesRepository: Repository<Messages>
  ) {}

  async findAll(marker_id) {
    return await getRepository(Messages)
      .createQueryBuilder('messages')
      .select([
        'messages.id',
        'messages.user_name',
        'messages.message',
        'messages.date_created'
      ])
      .where('messages.markerId = :marker_id', { marker_id })
      .orderBy('messages.date_created')
      .getMany()
  }

  async createMessage(payload) {
    return await getRepository(Messages)
      .createQueryBuilder()
      .insert()
      .values(payload)
      .execute()
  }

  findOne(id: string): Promise<Messages> {
    return this.messagesRepository.findOne(id)
  }
}
