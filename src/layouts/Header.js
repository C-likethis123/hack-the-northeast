import React from 'react'
import { makeStyles } from "@material-ui/core";

export default function Header() {
  const classes = useStyles()
  return (
    <header className={classes.header}>JOB BOX</header>
  )
}

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: '1.125rem',
    paddingLeft: '1.25rem',
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
  },
}));
