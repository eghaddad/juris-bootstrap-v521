import { IsString, IsOptional } from 'class-validator';

export class CreateContractDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;
}
