import React from 'react'
import SkillItem from './SkillItem'
import { IconButton, Button, Box, Typography, makeStyles } from "@material-ui/core";
import Bookmark from "./images/bookmark.svg";
import Apply from "./images/apply.svg";

export default function JobListItem(props) {
  const classes = useStyles();

  return (
    <Box className={classes.jobListingContainer} display="flex" width="100%">
      <Box className={classes.container} display="flex" flexDirection="column">
        <Box display="flex">
          <img alt="Company Image" src={props.image} width="100px" />
          <div className={classes.jobDetails}>
            <Typography variant="h6">{props.jobTitle}</Typography>
            <Typography variant="body2">{props.name}</Typography>
            <Typography variant="body2">
              {props.jobDescription}
            </Typography>
          </div>
        </Box>
        <div className={classes.tagList}>
          {props.skills.technicalSkills.map(
            (skill) => <SkillItem skill={skill} />)}

          {props.skills.softSkills.map(
            (skill) => <SkillItem skill={skill} />)}
        </div>
      </Box>
      <Box display="flex" flexDirection="column">
        <IconButton classes={{ root: classes.buttonRoot, label: classes.button }}>
          <img src={Bookmark} alt="Save Job" />
          Save Job
        </IconButton>
        <IconButton
          variant="contained"
          classes={{
            root: `${classes.buttonRoot} actionButton`,
            label: `${classes.button} actionButton`
          }}
        >
          <img src={Apply} alt="Apply Now" />
          Apply Now
        </IconButton>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  jobListingContainer: {
    marginTop: '1.34375rem',
    justifyContent: 'center',
  },
  container: {
    border: `1px solid ${theme.palette.primary.main}`,
    display: 'flex',
    justifyContent: 'center',
    padding: '1.5625rem',
    borderRadius: '5px',
    width: '70%',
    textAlign: 'left',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.05)',
  },
  jobDetails: {
    padding: '0 1.625rem',
  },
  tagList: {
    paddingTop: '1.625rem',
  },
  buttonRoot: {
    padding: 'unset',
    paddingLeft: '20px',
    paddingBottom: '9px',
    '&.actionButton': {
      padding: 'unset',
      paddingLeft: '20px',
      paddingTop: '9px',
    }
  },
  button: {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.05)',
    borderRadius: 5,
    padding: '0.625rem',
    width: 140,
    height: 116,
    display: 'flex',
    flexDirection: 'column',
    ...theme.typography.h6,
    '&.actionButton': {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  }
}));
