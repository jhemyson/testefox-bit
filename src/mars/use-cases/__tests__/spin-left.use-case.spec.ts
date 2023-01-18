import { Test, TestingModule } from '@nestjs/testing';
import { SpinLeftUseCase } from '../spin-left.use-case'
import { Rover } from '../../entities/rover.entity';
import { Direction } from '../../../mars/enums/rover.enum';

describe('SpinLeftUseCase', () => {
  let useCase: SpinLeftUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpinLeftUseCase],
    }).compile();

    useCase = module.get<SpinLeftUseCase>(SpinLeftUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('when direction is "N" return "W"', () => {
    const rover = new Rover({ 
      direction: Direction.N, 
      position: { x:1, y:1 } 
    })
    const spinLeft = useCase.execute({ rover })

    expect(spinLeft.rover.toJSON()).toEqual({
      direction: "W", 
      position: { x:1, y:1 }
    })
  })

  it('when direction is "W" return "S"', () => {
    const rover = new Rover({ 
      direction: Direction.W, 
      position: { x:3, y:2 } 
    })
    const spinLeft = useCase.execute({ rover })

    expect(spinLeft.rover.toJSON()).toEqual({
      direction: "S", 
      position: { x:3, y:2 }
    })
  })

  it('when direction is "S" return "E"', () => {
    const rover = new Rover({ 
      direction: Direction.W, 
      position: { x:3, y:2 } 
    })
    const spinLeft = useCase.execute({ rover })

    expect(spinLeft.rover.toJSON()).toEqual({
      direction: "S", 
      position: { x:3, y:2 }
    })
  })

  it('when direction is "E" return "N"', () => {
    const rover = new Rover({ 
      direction: Direction.W, 
      position: { x:3, y:2 } 
    })
    const spinLeft = useCase.execute({ rover })

    expect(spinLeft.rover.toJSON()).toEqual({
      direction: "S", 
      position: { x:3, y:2 }
    })
  })
});
