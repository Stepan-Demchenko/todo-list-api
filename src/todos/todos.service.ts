import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.save(createTodoDto);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todoRepository
      .createQueryBuilder()
      .delete()
      .from(Todo)
      .where('id = :id', { id: id })
      .execute();
  }
}
