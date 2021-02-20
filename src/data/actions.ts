import * as actions from "./actions";
import { action, CreateActionType } from "./utils";

export enum ActionTypes {
  AddTodo = "AddTodo",
  DoneTodo = "DoneTodo",
  DeleteTodo = "DeleteTodo",
}

export const addTodo = (name: string, desc: string) =>
  action({
    type: ActionTypes.AddTodo,
    payload: { name, desc },
  });

export const deleteTodo = (id: number) =>
  action({
    type: ActionTypes.DeleteTodo,
    payload: {
      id,
    },
  });

export const doneTodo = (id: number) =>
  action({
    type: ActionTypes.DoneTodo,
    payload: {
      id,
    },
  });

export type Action = CreateActionType<typeof actions>;
