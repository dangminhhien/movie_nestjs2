import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async create(@Body() createScheduleDto: any) {
    return this.scheduleService.create(createScheduleDto);
  }

  @Get()
  async findAll() {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateScheduleDto: any) {
    return this.scheduleService.update(id, updateScheduleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.scheduleService.remove(id);
  }
}
