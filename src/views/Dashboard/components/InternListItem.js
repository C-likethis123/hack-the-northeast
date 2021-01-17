import React from 'react'
import SkillItem from './SkillItem'
import { IconButton, Box, Typography, makeStyles } from "@material-ui/core";
import Invitation from "./images/invitation.svg";
import Application from "./images/application.svg";

export default function InternListItem(props) {
  const classes = useStyles();
  return (
    <Box className={classes.jobListingContainer} display="flex" width="100%">
      <Box className={classes.container} display="flex" flexDirection="column">
        <Box display="flex">
          <Typography variant="h5">{props.name}</Typography>
          &nbsp;
          <Typography variant="body1">| {props.credentials}</Typography>
        </Box>
        <div className={classes.tagGroup}>
          <Typography variant="body2">Skills</Typography>
          <div className={classes.tagList}>
            {props.skills.technicalSkills.map(
              (skill) => <SkillItem type="skills" skill={skill} />)}
            {props.skills.softSkills.map(
              (skill) => <SkillItem type="skills" skill={skill} />)}
          </div>
        </div>
        <div className={classes.tagGroup}>
          <Typography variant="body2">Personality</Typography>
          <div>
            {props.personality.map(
              (skill) => <SkillItem type="personality" skill={skill} />)}
          </div>
        </div>
        <div className={classes.tagGroup}>
          <Typography variant="body2">Hobbies</Typography>
          {props.hobbies.map(
            (skill) => <SkillItem type="hobbies" skill={skill} />)}
        </div>
      </Box>
      {props.invited ? (
        <IconButton classes={{ root: classes.buttonRoot, label: classes.button }}>
          <img src={Invitation} alt="Invite" />
        Invite
        </IconButton>)
        : (
          <IconButton
            variant="contained"
            classes={{
              root: `${classes.buttonRoot} actionButton`,
              label: `${classes.button} actionButton`
            }}
          >
            <img src={Application} alt="View Application" />
            View Application
          </IconButton>
        )}
    </Box >
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
    padding: '2.5625rem',
    borderRadius: '5px',
    width: '70%',
    textAlign: 'left',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.05)',
  },
  tagGroup: {
    paddingTop: '0.875rem',
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
