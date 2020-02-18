import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { BookService } from '../services/book.service';
import { BookDTO } from '../dto/book.dto';
import { DeleteResult } from 'typeorm';

@Controller('book')
export class BookController {
  constructor(private serv: BookService) {}

  @Get()
  public async findAll(@Query() Query: object): Promise<BookDTO[]> {
    return await this.serv.findAll();
  }

  @Post()
  public async post(@Body() dto: BookDTO): Promise<BookDTO> {
    return this.serv.create(dto);
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<BookDTO> {
    return this.serv.findOne(id);
  }

  @Put()
  public async update(@Body() dto: BookDTO): Promise<BookDTO> {
    return this.serv.update(dto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.serv.delete(id);
  }

  @Get('Page/:id')
  public async getPageResults(@Param('id') id: string): Promise<BookDTO[]> {
    return this.serv.getPageResults(id);
  }
}
