import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

type Props = {
  children: ReactElement;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 30,
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
  },
});

const Panel = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.root}>{children}</Paper>
      </Grid>
    </Grid>
  );
};

export default Panel;
