import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestProjectModule } from './test-project/test-project.module';

@Module({
  imports: [TestProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
