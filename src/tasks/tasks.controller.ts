// src/tasks/tasks.controller.ts
import { 
  Controller, 
  Post, 
  Body, 
  Get, 
  Param, 
  ParseIntPipe, 
  ValidationPipe 
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({ status: 201, description: 'La tarea ha sido creada exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  createTask(@Body(ValidationPipe) createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({ status: 200, description: 'Lista de todas las tareas' })
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una tarea por ID' })
  @ApiResponse({ status: 200, description: 'La tarea ha sido encontrada' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.getTaskById(id);
  }
}