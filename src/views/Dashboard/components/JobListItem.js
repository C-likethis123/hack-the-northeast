import React from 'react'
import SkillItem from './SkillItem'
import { Button, Box, Typography, makeStyles } from "@material-ui/core";

export default function JobListItem(props) {
  const classes = useStyles();

  return (
    <Box className={classes.jobListingContainer} display="flex" width="100%">
      <Box className={classes.container} display="flex">
        <img src={props.image} width="100px" />
        <div className={classes.jobDetails}>
          <Typography variant="h6">{props.jobTitle}</Typography>
          <Typography variant="body2">{props.name}</Typography>
          <Typography variant="body2">
            {props.jobDescription}
          </Typography>
          <div>
            {props.skills.technicalSkills.map(
              (skill) => <SkillItem skill={skill} />)}

            {props.skills.softSkills.map(
              (skill) => <SkillItem skill={skill} />)}
          </div>
        </div>
      </Box>
      <Box display="flex" flexDirection="column">
        <Button>Save Job</Button>
        <Button>Apply Job</Button>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  jobListingContainer: {
    marginTop: '1.34375rem',
  },
  container: {
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '1.5625rem',
    borderRadius: '5px',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.05)',
  },
  jobDetails: {
    textAlign: 'left',
    padding: '0 1.625rem',
  },
}));
