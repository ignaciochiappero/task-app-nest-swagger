//src\tasks\tasks.module.ts

import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Add this import

@Module({
  imports: [PrismaModule], // Add this line
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}