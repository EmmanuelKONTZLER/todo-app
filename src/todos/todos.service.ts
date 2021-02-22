import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

// @Injectable() définit un service
@Injectable()
export class TodosService {
    // dans une class, pas besoin de const pour créer la variable todos
    todos: Todo[]= [
        {
            id: 1,
            title: "todos app",
            description: "Create NestJS todos app",
            done: false,
        },
        {
            id: 2,
            title: "bread",
            description: "buy bread",
            done: true,
        },
        {
            id: 3,
            title: "wine",
            description: "buy wine",
            done: true,
        }
    ];

    findAll(): Todo[] {
        return this.todos;
    }
}
