import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 155)
  readonly first_name: string;

  @IsString()
  @Length(0, 155)
  readonly last_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 168)
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 8)
  readonly password: string;

  @IsString()
  readonly description: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
