import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuditModel } from 'tools/model/audit.model';

@Injectable()
export class ResourceService<T extends any, C extends any, U extends any> {
  constructor(protected readonly mongoModel: Model<T>) {}
  async findAll(): Promise<T[]> {
    return await this.mongoModel.find().exec();
  }

  async findOne(id: string): Promise<T> {
    return await this.mongoModel.findById(id).exec();
  }

  async createUser(model: C): Promise<T> {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'Ufuk';
    audit.createdAt = new Date();

    const createdModel = new this.mongoModel({
      ...(model as Object),
      ...audit,
    });

    return await createdModel.save();
  }

  async update(id: string, dto: U): Promise<T> {
    let newModel = await this.mongoModel.findById(id).exec();
    newModel = { ...newModel, ...(dto as Object) };

    return await this.mongoModel.findByIdAndUpdate(id, newModel as any, {
      new: true,
    });
  }

  async delete(id: string): Promise<T> {
    return await this.mongoModel.findByIdAndRemove({ _id: id });
  }
}
