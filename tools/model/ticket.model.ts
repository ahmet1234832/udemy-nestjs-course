import { ActivityModel } from './activity.mode';
import { InventoryModel } from './inventory.model';
import { TicketTypeModel } from './ticket-type.model';
import { UserModel } from './user.model';

export class TicketModel {
  id: string;
  name: string;
  description: string;
  type: TicketTypeModel;
  responsible: UserModel;
  activities: ActivityModel[];
  inventories: InventoryModel[];
}
