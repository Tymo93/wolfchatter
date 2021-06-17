import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Markers } from '../entity/markers'
import { MarkersController } from './markers.controller'
import { MarkersService } from './markers.service'

@Module({
  imports: [TypeOrmModule.forFeature([Markers])],
  providers: [MarkersService],
  controllers: [MarkersController]
})
export class MarkersModule {}
