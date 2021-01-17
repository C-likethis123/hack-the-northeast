import React from 'react'
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <Typography variant="body2">JOBBOX</Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: '1.125rem',
    paddingLeft: '1.25rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
  },
}));
