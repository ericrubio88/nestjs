import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { BookController } from './controllers/book.controller';
import { BookService } from './services/book.service';
import { Book } from './models/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Book]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
