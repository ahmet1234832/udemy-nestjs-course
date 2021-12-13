import { AuditModel } from './audit.model';
import * as mongoose from 'mongoose';
import { RoleModel } from './role.model';
import { GroupModel } from './group.model';

export class UserModel {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  password: string;
  audit: AuditModel;
  roles: RoleModel[];
  groups: GroupModel[];
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'user name is required'] },
  surname: { type: String, required: [true, 'user name is required'] },
  image: { type: String, unique: [true, 'image must be unique'] },
  email: {
    type: String,
    unique: [true, 'email must be unique'],
    required: [true, 'email must be unique'],
  },
  password: { type: String, required: [true, 'User must have a password'] },
  audit: Object,
  roles: Array,
  groups: Array,
});
