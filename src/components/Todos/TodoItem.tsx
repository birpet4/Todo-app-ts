import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Todo, TodoStatus } from "../../data/models";
import clsx from "clsx";

type Props = {
  todo: Todo;
};

const useStyles = makeStyles({
  completedTodo: {
    textDecoration: "line-through",
    color: "grey",
  },
});

const TodoItem = ({ todo }: Props) => {
  const classes = useStyles();
  return (
    <>
      <div
        className={clsx({
          [classes.completedTodo]: todo.status === TodoStatus.Done,
        })}
      >
        <Typography variant="h5" component="h2">
          {todo.name}
        </Typography>
        <Typography color="textSecondary">{todo.description}</Typography>
      </div>
    </>
  );
};

export default React.memo(TodoItem);
