import { Module } from '@nestjs/common';

import { MarsController } from './mars.controller';

@Module({
  controllers: [MarsController],
  providers: []
})
export class MarsModule {}
