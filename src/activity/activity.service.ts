import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { ActivityDto } from 'tools/dtos/activitiy.dto';
import { ActivityModel } from 'tools/model/activity.mode';

@Injectable()
export class ActivityService extends ResourceService<
  ActivityModel,
  ActivityDto,
  ActivityDto
> {
  constructor(@InjectModel('Activity') activityMongo: Model<ActivityModel>) {
    super(activityMongo);
  }
}
