import { Test, TestingModule } from '@nestjs/testing';
import { SpinRightUseCase } from '../spin-right.use-case'
import { Rover } from '../../entities/rover.entity';
import { Direction } from '../../../mars/enums/rover.enum';

describe('SpinRightUseCase', () => {
  let useCase: SpinRightUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpinRightUseCase],
    }).compile();

    useCase = module.get<SpinRightUseCase>(SpinRightUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('when direction is "N" return "E"', () => {
    const rover = new Rover({ 
      direction: Direction.N, 
      position: { x:4, y:5 } 
    })
    const spinLeft = useCase.execute({ rover })

    expect(spinLeft.rover.toJSON()).toEqual({
      direction: "E", 
      position: { x:4, y:5 }
    })
  })

  it('when direction is "E" return "S"', () => {
    const rover = new Rover({ 
      direction: Direction.E, 
      position: { x:3, y:2 } 
    })
    const spinLeft = useCase.execute({ rover })

    expect(spinLeft.rover.toJSON()).toEqual({
      direction: "S", 
      position: { x:3, y:2 }
    })
  })

  it('when direction is "S" return "W"', () => {
    const rover = new Rover({ 
      direction: Direction.S, 
      position: { x:7, y:2 } 
    })
    const spinLeft = useCase.execute({ rover })

    expect(spinLeft.rover.toJSON()).toEqual({
      direction: "W", 
      position: { x:7, y:2 }
    })
  })

  it('when direction is "W" return "N"', () => {
    const rover = new Rover({ 
      direction: Direction.W, 
      position: { x:3, y:2 } 
    })
    const spinRight = useCase.execute({ rover })

    expect(spinRight.rover.toJSON()).toEqual({
      direction: "N", 
      position: { x:3, y:2 }
    })
  })
});
