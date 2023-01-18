import { Injectable } from "@nestjs/common";
import { Rover } from "../entities/rover.entity";
import { Direction, Point } from "../enums/rover.enum";
import { UseCase } from "./use-case.interface";

export type MoveRoverInput = {
  rover: Rover
}

const Mover = {
  [Direction.N] : { point: Point.Y,  move: +1},
  [Direction.S] : { point: Point.Y,  move: -1},
  [Direction.E] : { point: Point.X,  move: +1},
  [Direction.W] : { point: Point.X,  move: -1},
 }

export type MoveRoverOutput = MoveRoverInput & {}

@Injectable()
export class MoveRoverUseCase implements UseCase<MoveRoverInput, MoveRoverOutput>{
  execute(input: MoveRoverInput): MoveRoverOutput {
    const { point, move } = Mover[input.rover.direction]

    input.rover[point] += move

    return input;
  }
}