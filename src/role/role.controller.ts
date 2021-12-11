import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoleDto } from 'tools/dtos/role.dto';
import { RoleModel } from 'tools/model/role.model';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @Get()
  async getAllGroups(): Promise<RoleModel[]> {
    return this.roleService.findAll();
  }
  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<RoleModel> {
    return this.roleService.findOne(id);
  }
  @Post()
  async createGroup(@Body() body: RoleDto): Promise<RoleModel> {
    return this.roleService.createUser(body);
  }
  @Put('id')
  async updateGroup(@Param('id') id: string, @Body() body: RoleDto) {
    return this.roleService.update(id, body);
  }
  @Delete('id')
  async removeGroup(@Param('id') id: string) {
    return this.roleService.delete(id);
  }
}
