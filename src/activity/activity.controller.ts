import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActivityDto } from 'tools/dtos/activitiy.dto';
import { ActivityModel } from 'tools/model/activity.mode';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  async CreateActivity(@Body() body: ActivityDto): Promise<ActivityModel> {
    return this.activityService.createUser(body);
  }

  @Get()
  async getAllActivities(): Promise<ActivityModel[]> {
    return this.activityService.findAll();
  }

  @Get(':id')
  async GetActivity(@Param() params): Promise<ActivityModel> {
    return this.activityService.findOne(params.id);
  }

  @Put(':id')
  async updateActivity(
    @Param('id') id: string,
    @Body() activityDto: ActivityDto,
  ): Promise<ActivityModel> {
    return this.activityService.update(id, activityDto);
  }

  @Delete(':id')
  async removeActivity(@Param('id') id: string): Promise<ActivityModel> {
    return this.activityService.delete(id);
  }
}
