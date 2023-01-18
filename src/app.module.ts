import { Module } from '@nestjs/common';
import { MarsModule } from './mars/mars.module';


@Module({
  imports: [MarsModule],
})
export class AppModule {}
