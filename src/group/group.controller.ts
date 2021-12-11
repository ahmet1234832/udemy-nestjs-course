import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GroupCreateDto } from 'tools/dtos/group.dto';
import { GroupModel } from 'tools/model/group.model';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  async getAllGroups(): Promise<GroupModel[]> {
    return this.groupService.findAll();
  }
  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<GroupModel> {
    return this.groupService.findOne(id);
  }
  @Post()
  async createGroup(@Body() body: GroupCreateDto): Promise<GroupModel> {
    return this.groupService.createUser(body);
  }
  @Put('id')
  async updateGroup(@Param('id') id: string, @Body() body: GroupCreateDto) {
    return this.groupService.update(id, body);
  }
  @Delete('id')
  async removeGroup(@Param('id') id: string) {
    return this.groupService.delete(id);
  }
}
