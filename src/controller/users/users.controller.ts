import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users/users.dtos';
import { UsersService } from 'src/service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  index() {
    return this.userService.findAll();
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post('store')
  store(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.userService.update(id, payload);
  }

  @Delete('destroy/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.destroy(id);
  }
}
