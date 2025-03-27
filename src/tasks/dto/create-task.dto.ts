// src/tasks/dto/create-task.dto.ts
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'El nombre de la tarea',
    minimum: 3,
    example: 'Crear documentación'
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'Descripción detallada de la tarea',
    minimum: 10,
    example: 'Crear documentación técnica del proyecto incluyendo diagramas'
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  description: string;
}