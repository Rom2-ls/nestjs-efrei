import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getById(@Param('id') id: string): User {
    return this.usersService.getById(id);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return Promise.resolve(this.usersService.getAll());
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User | string> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): User {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return this.usersService.delete(id);
  }

  @Get('not-implemented')
  notImplemented(): string {
    return this.usersService.notImplemented();
  }
}
