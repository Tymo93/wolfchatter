import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'
import { Markers } from '../entity/markers'

@Injectable()
export class MarkersService {
  constructor(
    @InjectRepository(Markers)
    private readonly markersRepository: Repository<Markers>
  ) {}

  async findAll() {
    return await getRepository(Markers)
      .createQueryBuilder('markers')
      .select(['markers.id', 'markers.location'])
      .getMany()
  }

  async createMarker(payload) {
    return await getRepository(Markers)
      .createQueryBuilder()
      .insert()
      .values(payload)
      .execute()
  }

  findOne(id: string): Promise<Markers> {
    return this.markersRepository.findOne(id)
  }
}
