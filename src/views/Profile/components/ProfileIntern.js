import React from 'react'
import SkillsItem from "./SkillsItem";
import ExperiencesItem from "./ExperiencesItem";
import PreferencesItem from "./PreferencesItem";
import HobbiesItem from "./HobbiesItem";

export default function ProfileIntern() {

  return (
    <div>
      <h1 className="title" >Start your internship journey!</h1>
      <div>
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

