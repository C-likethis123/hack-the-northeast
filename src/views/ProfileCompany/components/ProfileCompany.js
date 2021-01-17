import React from 'react'
import SkillsItem from "./ToolsItem";
import ProfilesItem from "./ProfilesItem";
import ToolsItem from "./ToolsItem";
import CulturesItem from "./CulturesItem";
import { Typography } from "@material-ui/core";
import JobsItem from './JobsItem';
export default function ProfileIntern() {

  return (
    <div>
      <Typography variant="h2" style = {{margin: "15px"}} className="title">Start looking for your perfect intern!</Typography>
      <div>
        <ProfilesItem/>
        <ToolsItem/>
        <CulturesItem/>
        <JobsItem/>

      </div>
      <div style = {{height: "100px"}}>
      </div>
    </div>
  )
}

