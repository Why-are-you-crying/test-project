import { Module } from '@nestjs/common';
import { TestProjectService } from './test-project.service';
import { TestProjectController } from './test-project.controller';

@Module({
  providers: [TestProjectService],
  controllers: [TestProjectController]
})
export class TestProjectModule {}
