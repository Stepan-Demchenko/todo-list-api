import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { Todo } from "./todos/entities/todo.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3307,
      username: 'dev',
      password: 'dev-123',
      database: 'todo_list_api',
      entities: [Todo],
      synchronize: true,
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
