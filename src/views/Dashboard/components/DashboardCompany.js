import React from 'react'
import InternListItem from "./InternListItem";
import { Box, Typography, Container, makeStyles } from "@material-ui/core";
import { Header } from "../../../layouts";

export default function DashboardCompany() {
  const classes = useStyles();
  var internList = [
    {
      name: "Josephine Lim",
      invited: true,
      credentials: "Undergraduate, Computer Science",
      skills: {
        technicalSkills: ["React", "HTML"],
        softSkills: ["Communication"]
      },
      personality: ["Free Spirited", "Organised", "Friendly"],
      hobbies: ["Volunteering", "Basketball", "Drawing"]
    },
    {
      name: "Clarissa Johnson",
      credentials: "Undergraduate, Finance",
      invited: false,
      skills: {
        technicalSkills: ["Marketing", "Finance", "Blockchain"],
        softSkills: ["Organisation"]
      },
      personality: ["Free Spirited", "Organised", "Friendly"],
      hobbies: ["Volunteering", "Basketball", "Drawing"]
    }
  ]

  return (
    <Box>
      <Header colour="default" />
      <Container className={classes.root}>
        <Typography color="primary" variant="h1">We've found some interns that we think you'll love!</Typography>
        <Typography variant="body2">Invite them to apply or contact them for an interview.</Typography>
        {internList.map(
          (intern) => <InternListItem {...intern} />)}
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
