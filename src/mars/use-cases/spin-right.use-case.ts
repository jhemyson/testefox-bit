import { Injectable } from "@nestjs/common";
import { Rover } from "../entities/rover.entity";
import { Direction } from "../enums/rover.enum";
import { UseCase } from "./use-case.interface";


// when: N => E, E => S, S => W, W => N
const SnipRightDirection = {
  [Direction.N] : Direction.E,
  [Direction.E] : Direction.S,
  [Direction.S] : Direction.W,
  [Direction.W] : Direction.N
 }

export type SpinRightInput = {
  rover: Rover
}

export type SpinLeftOutput = SpinRightInput & {}

@Injectable()
export class SpinRightUseCase implements UseCase<SpinRightInput, SpinLeftOutput>{
  execute(input: SpinRightInput): SpinLeftOutput {
    input.rover.direction = SnipRightDirection[input.rover.direction]

    return input;
  }
}