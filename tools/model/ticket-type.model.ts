import { AuditModel } from './audit.model';
import * as mongoose from 'mongoose';

export class TicketTypeModel {
  id: string;
  name: string;
  audit: AuditModel;
}

export const TicketTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Ticket Type Name must be unique'],
    required: [true, 'Ticket Type Name is required'],
  },
  audit: { type: Object },
});
