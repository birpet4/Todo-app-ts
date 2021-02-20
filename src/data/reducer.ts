import { Action, ActionTypes } from "./actions";
import { State, Todo, TodoStatus } from "./models";

const initialState: State = {
  todos: [],
  lastId: 0,
};

export const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.AddTodo: {
      const { name, desc } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.lastId++,
            name: name,
            description: desc,
            status: TodoStatus.InProgress,
          },
        ],
        lastId: state.lastId++,
      };
    }
    case ActionTypes.DoneTodo: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              status: TodoStatus.Done,
            };
          }
          return todo;
        }),
      };
    }
    case ActionTypes.DeleteTodo: {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }
    default:
      return state;
  }
};
