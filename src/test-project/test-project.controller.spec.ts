import { Test, TestingModule } from '@nestjs/testing';
import { TestProjectController } from './test-project.controller';

describe('TestProjectController', () => {
  let controller: TestProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestProjectController],
    }).compile();

    controller = module.get<TestProjectController>(TestProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
