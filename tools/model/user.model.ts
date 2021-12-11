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
  name: String,
  surname: String,
  image: String,
  email: String,
  audit: Object,
  roles: Array,
  groups: Array,
});
