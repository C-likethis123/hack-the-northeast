import React from 'react'
import SkillItem from './SkillItem'
import { Button, Box, Typography } from "@material-ui/core";

export default function JobListItem(props) {
  return (
    <Box display="flex" width="100%">
      <Box display="flex">
        <img src={props.image} width="100px" />
        <div>
          <Typography variant="h6">{props.name}</Typography>
           As a software engineer, you will work on a specific project critical to {props.name}’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.
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

