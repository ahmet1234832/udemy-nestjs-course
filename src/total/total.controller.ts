import { Controller, Get } from '@nestjs/common';
import { TotalService } from './total.service';

@Controller('total')
export class TotalController {
  constructor(private readonly totalService: TotalService) {}

  @Get()
  async getAllUsers() {
    return await this.totalService.findAll();
  }
}
