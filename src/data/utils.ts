export type CreateActionType<T extends object> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : never;
}[keyof T];

export const action = <
  T extends string,
  P,
  A extends { readonly type: T; readonly payload?: P }
>(
  action: A
) => action;
