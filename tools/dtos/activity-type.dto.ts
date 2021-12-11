import { IsNotEmpty, Length } from 'class-validator';
import { AuditDto } from './audit.dto';

export class ActivityTypeDto {
  @IsNotEmpty()
  @Length(2, 30)
  name: string;
  audit: AuditDto;
}
