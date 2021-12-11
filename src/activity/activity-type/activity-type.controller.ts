import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActivityTypeDto } from 'tools/dtos/activity-type.dto';
import { ActivityTypeModel } from 'tools/model/activity-type.model';
import { ActivityTypeService } from './activity-type.service';

@Controller('activity-type')
export class ActivityTypeController {
  constructor(private readonly activityTypeService: ActivityTypeService) {}

  @Post()
  async CreateActivityType(
    @Body() body: ActivityTypeDto,
  ): Promise<ActivityTypeModel> {
    return this.activityTypeService.createUser(body);
  }

  @Get()
  async getAllActivityTypes(): Promise<ActivityTypeModel[]> {
    return this.activityTypeService.findAll();
  }

  @Get(':id')
  async GetActivityType(@Param() params): Promise<ActivityTypeModel> {
    return this.activityTypeService.findOne(params.id);
  }

  @Put(':id')
  async updateActivityType(
    @Param('id') id: string,
    @Body() activityTypeDto: ActivityTypeDto,
  ): Promise<ActivityTypeModel> {
    return this.activityTypeService.update(id, activityTypeDto);
  }

  @Delete(':id')
  async removeActivityType(
    @Param('id') id: string,
  ): Promise<ActivityTypeModel> {
    return this.activityTypeService.delete(id);
  }
}
