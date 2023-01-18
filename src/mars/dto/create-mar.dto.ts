
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMarDto {

  @IsString()
  @IsNotEmpty()
  command: string
}
