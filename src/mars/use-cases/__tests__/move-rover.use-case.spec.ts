import { Test, TestingModule } from '@nestjs/testing';
import { Rover } from '../../../mars/entities/rover.entity';
import { Direction } from '../../../mars/enums/rover.enum';
import { MoveRoverUseCase } from '../move-rover.use-case'

describe('MoveRoverUseCase', () => {
  let useCase: MoveRoverUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoveRoverUseCase],
    }).compile();

    useCase = module.get<MoveRoverUseCase>(MoveRoverUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('check that rover movements in "S" subtract a position in "Y"', () => {
    const rover = new Rover({ 
      direction: Direction.S, 
      position: { x:1, y:2 } 
    })

    for (var i = 1; i < 10; i++) {
      const move = useCase.execute({ rover })
      expect(move.rover.toJSON()).toStrictEqual({
        direction:"S",
        position: { x:1, y:(2 - i) } 
      })
    }
  })

  it('check that rover movements in "N" add a position in "Y"', () => {
    const rover = new Rover({ 
      direction: Direction.N, 
      position: { x:1, y:2 } 
    })

    for (var i = 1; i < 10; i++) {
      const move = useCase.execute({ rover })
      expect(move.rover.toJSON()).toStrictEqual({
        direction:"N",
        position: { x:1, y:(2 + i) } 
      })
    }
  })

  it('check that rover movements in "E" add a position in "X"', () => {
    const rover = new Rover({ 
      direction: Direction.E, 
      position: { x:1, y:2 } 
    })

    for (var i = 1; i < 10; i++) {
      const move = useCase.execute({ rover })
      expect(move.rover.toJSON()).toStrictEqual({
        direction:"E",
        position: { x:(1 + i), y:2 } 
      })
    }
  })

  it('check that rover movements in "W" subtract a position in "X"', () => {
    const rover = new Rover({ 
      direction: Direction.W, 
      position: { x:1, y:2 } 
    })

    for (var i = 1; i < 10; i++) {
      const move = useCase.execute({ rover })
      expect(move.rover.toJSON()).toStrictEqual({
        direction:"W",
        position: { x:(1 - i), y:2 } 
      })
    }
  })

});
