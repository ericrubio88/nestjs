import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Book } from '../models/book.entity';

export class BookDTO implements Readonly<BookDTO> {
  @ApiProperty({ required: true })
  @IsInt()
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  description?: string;

  @ApiProperty({ required: false })
  @IsInt()
  year?: number;

  public static from(dto: Partial<BookDTO>) {
    const book = new BookDTO();
    book.id = dto.id;
    book.name = dto.name;
    book.description = dto.description;
    book.year = dto.year;
    return book;
  }

  public static fromEntity(entity: Book) {
    return this.from({
      id: entity.id,
      name: entity.name,
      description: entity.description,
      year: entity.year,
    });
  }

  // public toEntity() {
  //   const book = new Book();
  //   book.id = this.id;
  //   book.name = this.name;
  //   book.description = this.description;
  //   book.year = this.year;
  //   book.createDateTime = new Date();

  //   return book;
  // }
}
