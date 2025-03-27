// src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        name: createTaskDto.name,
        description: createTaskDto.description,
      },
    });
  }

  async getAllTasks() {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }
}