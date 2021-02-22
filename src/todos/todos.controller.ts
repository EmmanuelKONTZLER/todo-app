import { Controller, Get } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

// @Controller('todos') permet d'écouter l'url localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService:TodosService) {}

    @Get()
    findAll():Todo[] {
        return this.todosService.findAll();
    }
}
