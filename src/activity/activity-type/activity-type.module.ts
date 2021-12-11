import { Module } from '@nestjs/common';
import { ActivityTypeService } from './activity-type.service';

@Module({
  providers: [ActivityTypeService]
})
export class ActivityTypeModule {}
