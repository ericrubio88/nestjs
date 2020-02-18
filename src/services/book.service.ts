import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../models/book.entity';
import { BookDTO } from '../dto/book.dto';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly repo: Repository<Book>,
  ) {}

  public async findAll(): Promise<BookDTO[]> {
    return await this.repo
      .find()
      .then(books => books.map(e => BookDTO.fromEntity(e)));
  }

  public async create(dto: BookDTO): Promise<BookDTO> {
    return this.repo.save(dto).then(e => BookDTO.fromEntity(e));
  }

  public async findOne(id: number): Promise<BookDTO> {
    return await this.repo.findOne(id).then(book => BookDTO.fromEntity(book));
  }

  public async update(dto: BookDTO): Promise<BookDTO> {
    const id = dto.id;
    await this.repo.update(id, dto);
    return await this.findOne(id);
  }

  public async delete(id: string): Promise<DeleteResult> {
    return await this.repo.delete(id);
  }

  public async getPageResults(id: string): Promise<BookDTO[]> {
    return this.repo
      .find()
      .then(books => books.map(e => BookDTO.fromEntity(e)));
  }
}
