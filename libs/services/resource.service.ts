import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuditModel } from 'tools/model/audit.model';
import { filterModel } from 'tools/model/filter.model';

@Injectable()
export class ResourceService<T extends any, C extends any, U extends any> {
  constructor(protected readonly mongoModel: Model<T>) {}

  generalSearchQuery = {
    page: 1,
    size: 10,
    sort: 'ASC',
    sortBy: '_,d',
    queryText: '',
    searchBy: 'name',
  };
  async findAll(query?: filterModel): Promise<any[]> {
    if (Object.keys(query).length !== 0) {
      const searchValue = await { ...this.generalSearchQuery, ...query };
      const userRegex = new RegExp(searchValue.queryText, 'i');

      return await this.mongoModel
        .find()
        .limit(Math.max(0, searchValue.size))
        .skip(searchValue.size * (searchValue.page - 1))
        .sort([[`${searchValue.sortBy}`, searchValue.sort]])
        .exec();
    } else {
      const count = await this.mongoModel.countDocuments({}).exec();
      const data = await this.mongoModel
        .find()
        .limit(Math.max(0, this.generalSearchQuery.size))
        .skip(this.generalSearchQuery.size * (this.generalSearchQuery.page - 1))
        .exec();
      return await [
        {
          success: true,
          size: this.generalSearchQuery.size,
          total: count,
          data: data,
        },
      ];
    }
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
