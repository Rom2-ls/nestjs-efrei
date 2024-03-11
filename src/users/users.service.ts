import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  getAll(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto): User | string {
    const existingUser = this.users.find(
      (user) => user.email === createUserDto.email,
    );
    if (existingUser) {
      Logger.error('User with this email already exists');
      return 'User with this email already exists';
    }
    const user: User = { id: uuidv4(), ...createUserDto };
    this.users.push(user);
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto): User {
    const user = this.users.find((user) => user.id === id);
    Object.assign(user, updateUserDto);
    return user;
  }

  delete(id: string): string {
    this.users = this.users.filter((user) => user.id !== id);
    return `User with id: ${id} has been deleted`;
  }

  notImplemented(): string {
    Logger.error('This method is not implemented yet');
    Logger.warn('This method is not implemented yet');
    Logger.log('This method is not implemented yet');
    Logger.debug('This method is not implemented yet');
    return 'This method is not implemented yet';
  }
}
