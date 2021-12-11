import { IsNotEmpty, Length } from 'class-validator';
import { ActivityModel } from 'tools/model/activity.mode';
import { AuditModel } from 'tools/model/audit.model';
import { InventoryModel } from 'tools/model/inventory.model';
import { TicketTypeModel } from 'tools/model/ticket-type.model';
import { UserModel } from 'tools/model/user.model';

export class TicketCreateDto {
  @IsNotEmpty()
  @Length(2, 30)
  name: string;
  @IsNotEmpty()
  @Length(2, 120)
  description: string;
  @IsNotEmpty()
  type: TicketTypeModel;
  @IsNotEmpty()
  responsible: UserModel;
  audit: AuditModel;
  activities: ActivityModel[];
  inventories: InventoryModel[];
}
