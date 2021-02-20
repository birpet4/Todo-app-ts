export enum TodoStatus {
  InProgress = "InProgress",
  Done = "Done",
}

export interface Todo {
  id: number;
  name: string;
  description: string;
  status: TodoStatus;
}

export interface State {
  todos: Todo[];
  lastId: number;
}
