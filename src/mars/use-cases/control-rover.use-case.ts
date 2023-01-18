import { Injectable } from "@nestjs/common";
import { Rover } from "../entities/rover.entity";
import { RoverMovementInvalid } from "../errors/rover-movement-invalid.exception";
import { MoveRoverUseCase } from "./move-rover.use-case";
import { SpinLeftUseCase } from "./spin-left.use-case";
import { SpinRightUseCase } from "./spin-right.use-case";

import { UseCase } from "./use-case.interface";

const SelectCommand = {
  L: "spinLeft",
  R: "spinRight",
  M: "moveRover"
}

export type Commands = "L" | "R" | "M"

export type Plateu = {
  width: number
  height: number
}

export type ControlRoverInput = {
  rover: Rover
  commands: Commands[],
  plateau: Plateu
}

export type ControlRoverOutput =  {
  rover: Rover
}

@Injectable()
export class ControlRoverUseCase implements UseCase<ControlRoverInput, ControlRoverOutput>{
  constructor(
    private readonly spinLeft: SpinLeftUseCase,
    private readonly spinRight: SpinRightUseCase,
    private readonly moveRover: MoveRoverUseCase,
  ){}

  private processCommand(rover: Rover, command: Commands) {
    return this[SelectCommand[command]].execute({ rover })
  }

  execute(input: ControlRoverInput): ControlRoverOutput {
    const { commands, rover, plateau } = input

    commands.forEach(command => {
      this.processCommand(rover, command)

      if(rover.x > plateau.width) throw new RoverMovementInvalid()
      if(rover.y > plateau.height) throw new RoverMovementInvalid()
      
    })

    return { rover };
  }
}