import { Direction, Point } from "../enums/rover.enum";

export type RoverPosition = {
  [Point.X]: number;
  [Point.Y]: number;
}

export type RoverInput = {
  position: RoverPosition
  direction: Direction;
}

export class Rover {
  constructor(private readonly props: RoverInput) {}

  public get x(){
    return this.props.position.x
  }
  
  public get y(){
    return this.props.position.y
  }

  public get direction(){
    return this.props.direction
  }

  set direction(direction: Direction){
    this.props.direction = direction
  }

  public set x(position: number){
    this.props.position.x = position
  }

  public set y(position: number){
    this.props.position.y = position
  }

  public toJSON(){
    return {
      position: {
        x: this.x,
        y: this.y,
      },
      direction: this.direction
    }
  }
}