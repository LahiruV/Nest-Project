import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ example: 25, description: 'The age of the user' })
  @IsInt()
  @Min(1)
  @Max(120)
  age: number;
}

export class UpdateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  name?: string;

  @ApiProperty({ example: 25, description: 'The age of the user' })
  @IsInt()
  @Min(1)
  @Max(120)
  age?: number;
}