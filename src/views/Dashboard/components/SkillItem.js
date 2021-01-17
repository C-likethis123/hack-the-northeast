import React from 'react'
import { Chip, makeStyles } from '@material-ui/core';

export default function SkillItem(props) {
  const classes = useStyles();
  return (
    <Chip
      className={`${classes.chip} ${props.type}`}
      variant="outlined"
      size="small"
      label={props.skill}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  chip: {
    padding: '0.8125rem 0.9375rem',
    marginRight: '4px',
    "&.skills": {
      border: `1px solid ${theme.palette.darkblue}`,
      color: theme.palette.darkblue,
    },
    "&.personality": {
      border: `1px solid ${theme.palette.purple}`,
      color: theme.palette.purple,
    },
    "&.hobbies": {
      border: `1px solid ${theme.palette.green}`,
      color: theme.palette.green,
    }
  },
}))
