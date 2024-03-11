import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetUsersQueryDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsNumber()
  age?: number;
}
