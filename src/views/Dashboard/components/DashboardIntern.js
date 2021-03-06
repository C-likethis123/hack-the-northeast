import React from 'react'
import JobListItem from "./JobListItem";
import GoogleImage from "./images/google.svg";
import FacebookImage from "./images/facebook.svg";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import { Header } from "../../../layouts";

export default function DashboardIntern() {
  const classes = useStyles();
  var jobList = [
    {
      name: "Google",
      jobTitle: "Software Engineer",
      jobDescription: "As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.",
      image: GoogleImage,
      skills: { technicalSkills: ["React", "HTML", "Figma"], softSkills: ["Communication"] }
    },
    {
      name: "Facebook",
      jobTitle: "Marketing Intern",
      jobDescription: "As a Marketing Intern, you will assist our marketing team to plan and lead marketing campaigns for Facebook product launches. Applicants should have prior experience in marketing, be it through academic or work experience. They should also be familiar with concepts such as branding and SEO.",
      image: FacebookImage, skills: { technicalSkills: ["Marketing", "Finance"], softSkills: ["Organisation"] }
    }
  ]

  return (
    <Box>
      <Header colour="default" />
      <Container className={classes.root}>
        <Typography color="primary" variant="h1">We've found some jobs you'll love!</Typography>
        <Typography variant="body2">Indicate your interest or bookmark them (but don't wait too long!)</Typography>
        {jobList.map((job) => <JobListItem {...job} />)}
      </Container>
    </Box>

  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: '37.5px 24px',
  },
}));
