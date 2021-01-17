import React from 'react'
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

export default function Header(props) {
  const { colour } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.header} ${colour}`}>
      <Typography variant="body2">JOBBOX</Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: '1.125rem',
    padding: '1.25rem',
    textAlign: "left",
    '&.white': {
      backgroundColor: "white",
      color: theme.palette.primary.main,
    },
    '&.default': {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    }
  },
}));
