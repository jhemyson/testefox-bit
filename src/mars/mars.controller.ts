import { Controller, Post, Body} from '@nestjs/common';
import { CreateMarDto } from './dto/create-mar.dto';
import { CommandPipeTransform } from './mars.pipe';

@Controller('mars')
export class MarsController {
  constructor() {}

  @Post()
  create(@Body(CommandPipeTransform) createMarDto: CreateMarDto) {
    return createMarDto
  }

}
