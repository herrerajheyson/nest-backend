import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users/users.dtos';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  async findAll() {
    return await this.users.find();
  }

  async findOne(id: number) {
    const response = await this.users.findOne(id);
    if (!response) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return response;
  }

  async create(payload: CreateUserDto) {
    try {
      await this.users.insert(payload);
    } catch (error) {
      throw new InternalServerErrorException('Server Error ' + error);
    }
    return payload;
  }

  async update(id: number, payload: UpdateUserDto) {
    await this.users.update(id, payload);
    return {
      message: `User ${id} updated`,
    };
  }

  async destroy(id: number) {
    await this.users.delete(id);
    return {
      message: `User ${id} deleted`,
    };
  }
}
