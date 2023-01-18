import { Test, TestingModule } from '@nestjs/testing';
import { RoverMovementInvalid } from '../../../mars/errors/rover-movement-invalid.exception';
import { Rover } from '../../../mars/entities/rover.entity';
import { Direction } from '../../../mars/enums/rover.enum';
import { Commands, ControlRoverUseCase, Plateu } from '../control-rover.use-case';
import { MoveRoverUseCase } from '../move-rover.use-case';
import { SpinLeftUseCase } from '../spin-left.use-case';
import { SpinRightUseCase } from '../spin-right.use-case';


describe('MoveRoverUseCase', () => {
  let useCase: ControlRoverUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ControlRoverUseCase,
        SpinLeftUseCase,
        SpinRightUseCase,
        MoveRoverUseCase,
      ],
    }).compile();

    useCase = module.get<ControlRoverUseCase>(ControlRoverUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('case test input 1 2 N LMLMLMLMM', () => {
    const rover = new Rover({ 
      direction: Direction.N, 
      position: { x:1, y:2 } 
    })
    const commands: Commands[] = ["L","M","L","M","L","M","L","M","M"]
    const plateau: Plateu = { height: 5, width: 5 }

    const result = useCase.execute({ rover, commands, plateau })

    expect(result.rover.toJSON()).toStrictEqual({
      direction: "N", 
      position: { x:1, y:3 } 
    })
  })

  it('case test input 3 3 E MMRMMRMRRM', () => {
    const rover = new Rover({ 
      direction: Direction.E, 
      position: { x:3, y:3 } 
    })
    const commands:Commands[] = ["M","M","R","M","M","R","M","R","R","M"]
    const plateau: Plateu = { height: 5, width: 5 }

    const result = useCase.execute({ rover, commands, plateau })

    expect(result.rover.toJSON()).toStrictEqual({
      direction: "E", 
      position: { x:5, y:1 } 
    })
  })

  it('throw error RoverMovementInvalid when rover movement exceed the size of the plateau', () => {
    const rover = new Rover({ 
      direction: Direction.E, 
      position: { x:3, y:3 } 
    })
    const commands:Commands[] = ["M","M","R","M","M","R","M","R","R","M"]
    const plateau: Plateu = { height: 4, width: 4 }

    try {
      useCase.execute({ rover, commands, plateau })
    } catch (error) {
      expect(error.response.message).toEqual("rover movement cannot exceed the size of the plateau")
    }
    
  })

});
