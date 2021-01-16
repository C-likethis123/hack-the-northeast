import React from 'react'
import JobListItem from "./JobListItem";
import GoogleImage from "./images/google.svg";
import FacebookImage from "./images/facebook.svg";
import { Container, Typography, makeStyles } from "@material-ui/core";

export default function DashboardIntern() {
  const classes = useStyles();
  var jobList = [
    { name: "Google", image: GoogleImage, skills: { technicalSkills: ["React", "HTML", "Figma"], softSkills: ["Communication"] } },
    { name: "Facebook", image: FacebookImage, skills: { technicalSkills: ["Marketing", "Finance"], softSkills: ["Organisation"] } }
  ]

  return (
    <Container className={classes.root}>
      <Typography color="primary" variant="h1">We've found some jobs you'll love!</Typography>
      <Typography variant="body2">Indicate your interest or bookmark them (but don't wait too long!)</Typography>
      <div>
        {jobList.map(
          (job) => <JobListItem name={job.name} image={job.image} skills={job.skills} />)}
      </div>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));
