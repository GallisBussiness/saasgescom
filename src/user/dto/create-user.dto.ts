import { IsEnum, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { USER_ROLE } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({ example: 'Modou Ndiaye', description: 'name user' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'momo@gmail.com', description: 'login user' })
  @IsString()
  login: string;

  @ApiProperty({ example: 'momo123', description: 'password user' })
  @IsString()
  password: string;

  @ApiProperty({ example: '77 956 85 41', description: 'TEL user' })
  @IsPhoneNumber("SN")
  tel: string;

  @ApiProperty({ example: USER_ROLE.USER, description: 'role user' })
  @IsOptional()
  @IsEnum(USER_ROLE)
  role: string;
}
