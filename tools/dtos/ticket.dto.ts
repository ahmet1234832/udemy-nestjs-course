import { ActivityModel } from 'tools/model/activity.mode';
import { AuditModel } from 'tools/model/audit.model';
import { InventoryModel } from 'tools/model/inventory.model';
import { TicketTypeModel } from 'tools/model/ticket-type.model';
import { UserModel } from 'tools/model/user.model';

export class TicketCreateDto {
  name: string;
  description: string;
  type: TicketTypeModel;
  responsible: UserModel;
  audit: AuditModel;
  activities: ActivityModel[];
  inventories: InventoryModel[];
}
