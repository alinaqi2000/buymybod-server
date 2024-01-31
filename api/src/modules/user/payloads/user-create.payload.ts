import {
  IsString,
  IsOptional,
  IsEmail,
  Validate,
  IsIn,
  IsNotEmpty,
  IsArray
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Username } from '../validators/username.validator';
import { GENDERS, USER_TYPES } from '../constants';

export class UserCreatePayload {
  @ApiProperty()
  @IsString()
  @IsIn(USER_TYPES)
  type: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @Validate(Username)
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsIn(GENDERS)
  @IsOptional()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  birthYear: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  country: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bodyHeight: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bodyWeight: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bodyRace: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bodyBuild: string;

  @ApiProperty()
  @IsString()
  @IsArray()
  categories: string[];

  @ApiProperty()
  @IsString()
  @IsOptional()
  kycInfo: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bankSwiftCode: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bankAccountType: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bankAccountNumber: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bankRoutingNumber: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bankBranchName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bankBranchAddress: string;

  constructor(params: Partial<UserCreatePayload>) {
    if (params) {
      this.type = params.type;
      this.email = params.email;
      this.username = params.username;
      this.gender = params.gender;
      this.name = params.name;
      this.birthYear = params.birthYear;
      this.address = params.address;
      this.country = params.country;
      this.bodyHeight = params.bodyHeight;
      this.bodyWeight = params.bodyWeight;
      this.bodyRace = params.bodyRace;
      this.bodyBuild = params.bodyBuild;
      this.categories = params.categories;
      this.kycInfo = params.kycInfo;
      this.bankSwiftCode = params.bankSwiftCode;
      this.bankAccountType = params.bankAccountType;
      this.bankAccountNumber = params.bankAccountNumber;
      this.bankRoutingNumber = params.bankRoutingNumber;
      this.bankBranchName = params.bankBranchName;
      this.bankBranchAddress = params.bankBranchAddress;
    }
  }
}
