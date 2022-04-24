import { Exclude, Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

@Exclude()
export class CreateUsuarioDto {
  @IsString()
  @Length(5, 10)
  @Expose()
  readonly Nombres: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  readonly Apellidos: string;

  @IsNumber()
  @Max(99999999)
  @Min(100000)
  @Expose()
  readonly Clave: number;
}
