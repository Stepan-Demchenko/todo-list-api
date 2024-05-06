import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo } from './entities/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TodosController],
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodosService],
})
export class TodosModule {}
