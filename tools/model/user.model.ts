import { AuditModel } from './audit.model';
import * as mongoose from 'mongoose';

export class UserModel {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  password: string;
  passwordHash: string;
  audit: AuditModel;
}

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  audit: Object,
  roles: Array,
  groups: Array,
});
