import { BadRequestException } from '@nestjs/common'

export class CommandInvalid extends BadRequestException {
  constructor(){
    super('Invalid command. can be (L, R or M) type only')
  }
}