import { Injectable } from "@nestjs/common";
import { Rover } from "../entities/rover.entity";
import { Direction } from "../enums/rover.enum";
import { UseCase } from "./use-case.interface";


// when: N => W , E => N, S = E, W = S
const SnipLeftDirection = {
  [Direction.N] : Direction.W,
  [Direction.S] : Direction.E,
  [Direction.E] : Direction.N,
  [Direction.W] : Direction.S
}

export type SpinLeftInput = {
  rover: Rover
}

export type SpinLeftOutput = SpinLeftInput & {}

@Injectable()
export class SpinLeftUseCase implements UseCase<SpinLeftInput, SpinLeftOutput>{
  execute(input: SpinLeftInput): SpinLeftOutput {
    input.rover.direction = SnipLeftDirection[input.rover.direction]

    return input;
  }
}