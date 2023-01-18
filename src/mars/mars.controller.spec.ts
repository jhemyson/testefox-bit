import { Test, TestingModule } from '@nestjs/testing';
import { MarsController } from './mars.controller';


describe('MarsController', () => {
  let controller: MarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarsController],
      providers: [],
    }).compile();

    controller = module.get<MarsController>(MarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
