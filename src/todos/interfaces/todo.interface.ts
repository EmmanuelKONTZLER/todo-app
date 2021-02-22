// Le ? rend optionnel la propriété (ici la description)

export interface Todo {
    id: number;
    title:string;
    done: boolean;
    description?: string;
}