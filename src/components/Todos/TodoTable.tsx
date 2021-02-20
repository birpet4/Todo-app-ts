import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../data/selectors";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { deleteTodo, doneTodo } from "../../data/actions";
import { TodoStatus } from "../../data/models";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeader: {
    backgroundColor: "#3f51b5",
    color: "white !important",
  },
  completedTodo: {
    color: "green",
  },
});

export const TodoTable = () => {
  const classes = useStyles();
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const onDone = useCallback(
    (id: number) => {
      dispatch(doneTodo(id));
    },
    [dispatch]
  );

  const onDelete = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const renderEmptyTable = () => (
    <Grid container justify="center">
      <Typography variant="h6" component="h2">
        There is nothing to do
      </Typography>
    </Grid>
  );

  return todos.length > 0 ? (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader}>
              <Typography variant="h6" component="h2">
                Todo
              </Typography>
            </TableCell>
            <TableCell align="right" className={classes.tableHeader}>
              <Typography variant="h6" component="h2">
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell component="th" scope="row">
                <TodoItem todo={todo} />
              </TableCell>
              <TableCell align="right">
                {todo.status === TodoStatus.InProgress && (
                  <IconButton onClick={() => onDone(todo.id)}>
                    <CheckCircleIcon className={classes.completedTodo} />
                  </IconButton>
                )}
                <IconButton onClick={() => onDelete(todo.id)} color="secondary">
                  <HighlightOffIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    renderEmptyTable()
  );
};

export default React.memo(TodoTable);
