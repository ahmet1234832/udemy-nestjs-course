import { Module } from '@nestjs/common';
import { ActivityTypeController } from './activity-type/activity-type.controller';
import { ActivityTypeModule } from './activity-type/activity-type.module';

@Module({
  controllers: [ActivityTypeController],
  imports: [ActivityTypeModule]
})
export class ActivityModule {}
