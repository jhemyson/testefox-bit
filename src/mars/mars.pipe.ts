import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateMarDto } from './dto/create-mar.dto';
import { CommandInvalid } from './errors/command-invalid.exception';

@Injectable()
export class CommandPipeTransform implements PipeTransform {
  transform(value: CreateMarDto) {
    const { command } = value
    
    const commadIsValidRegex = /[^L|R|M]/g

    if(command.match(commadIsValidRegex)){
      throw new CommandInvalid()
    }
    console.log(command.trim())
    // const bodyTransform = {
    //   commands = command.
    // }

    return value;
  }
}
