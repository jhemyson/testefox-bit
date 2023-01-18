import { BadRequestException } from '@nestjs/common'

export class RoverMovementInvalid extends BadRequestException {
  constructor(){
    super('rover movement cannot exceed the size of the plateau')
  }
}