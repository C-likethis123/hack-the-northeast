import React from 'react'
import SkillsItem from "./SkillsItem";
import ExperiencesItem from "./ExperiencesItem";
import PreferencesItem from "./PreferencesItem";
import HobbiesItem from "./HobbiesItem";
import { Typography } from "@material-ui/core";
import EducationsItem from './EducationsItem';
export default function ProfileIntern() {

  return (
    <div>
      <Typography variant="h2" style = {{margin: "15px"}} className="title">Start your internship journey!</Typography>
      <div>
        <EducationsItem/>
        <SkillsItem/>
        <ExperiencesItem/>
        <PreferencesItem/>
        <HobbiesItem/>

      </div>
      <div style = {{height: "100px"}}>
      </div>
    </div>
  )
}

