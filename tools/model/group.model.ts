import * as mongoose from 'mongoose';
import { AuditModel } from './audit.model';
import { RoleModel } from './role.model';

export class GroupModel {
  id: string;
  name: string;
  description: string;
  audit: AuditModel;
  roles: RoleModel[];
}

export const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Group must have a name'],
    unique: [true, 'Group name must be unique'],
  },
  description: {
    type: String,
    required: [true, 'Group must have a description'],
  },
  audit: { type: Object },
  roles: { type: Array },
});
