import { Controller, Get, Param } from '@nestjs/common'
import { Markers } from '../entity/markers'
import { MarkersService } from './markers.service'

@Controller('markers')
export class MarkersController {
  constructor(private readonly markersService: MarkersService) {}

  @Get()
  findAll(): Promise<Markers[]> {
    return this.markersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Markers> {
    return this.markersService.findOne(id)
  }
}
