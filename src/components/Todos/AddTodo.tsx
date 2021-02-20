import React, { useCallback, useMemo, useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addTodo } from "../../data/actions";

const useStyles = makeStyles({
  textName: {
    minWidth: 200,
  },
  textDesc: {
    width: 500,
  },
  textAdd: {
    paddingTop: 10,
  },
});

const AddTodoItem = () => {
  const initialState = useMemo(() => {
    return { name: "", desc: "" };
  }, []);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onClick = useCallback(() => {
    dispatch(addTodo(state.name, state.desc));
    setState(initialState);
  }, [dispatch, initialState, setState, state]);

  return (
    <Grid container>
      <Grid item md={2} xs={12}>
        <Typography variant="h6" component="h3" className={classes.textAdd}>
          New task
        </Typography>
      </Grid>
      <Grid item md={2} xs={12}>
        <TextField
          required
          className={classes.textName}
          id="outlined-required"
          label="Name"
          variant="outlined"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.currentTarget.value })}
        />
      </Grid>
      <Grid item md={5} xs={12}>
        <TextField
          id="outlined-required"
          className={classes.textDesc}
          label="Description"
          variant="outlined"
          value={state.desc}
          onChange={(e) => setState({ ...state, desc: e.currentTarget.value })}
        />
      </Grid>
      <Grid item md={3} xs={12} className={classes.textAdd}>
        <Button
          variant="contained"
          color="primary"
          onClick={onClick}
          disabled={state.name === ""}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default React.memo(AddTodoItem);
