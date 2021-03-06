import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GroupService } from 'src/group/group.service';
import { GroupModel } from 'tools/model/group.model';
import { RoleModel } from 'tools/model/role.model';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject('GroupService') private readonly groupService: GroupService,
  ) {}
  canActivate(context: ExecutionContext): boolean {
    const allowedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!allowedRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user.user;
    console.log(user);
    const allowed = this.isAllowed(allowedRoles, user.roles, user.groups);

    if (!allowed) {
      throw new ForbiddenException('Forbidden Method!');
    }
    return true;
  }

  async isAllowed(
    allowedRoles,
    userRoles: RoleModel[],
    userGroups: GroupModel[],
  ) {
    const allUsersRoles = [];
    userRoles.map((data) => {
      allUsersRoles.push(data.name);
    });
    await Promise.all(
      userGroups.map(async (data) => {
        const groupRoles = await this.groupService.findOne(data._id);
        groupRoles[0].roles.map((response) => {
          allUsersRoles.push(response['name']);
        });
      }),
    );
    const hasRole = allUsersRoles.some((role) => allowedRoles.includes(role));
    return hasRole;
  }
}
