import React from 'react'
import SkillsItem from "./SkillsItem";
import ExperiencesItem from "./ExperiencesItem";
import PreferencesItem from "./PreferencesItem";
import HobbiesItem from "./HobbiesItem";
import { Typography } from "@material-ui/core";
import EducationsItem from './EducationsItem';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Header } from "../../../layouts";

export default function ProfileIntern() {
  const history = useHistory();
  const goToDashboard = () => {
    history.push("/dashboardIntern");
  }

  return (
    <div>
      <Header colour="default" />
      <Typography variant="h2" style={{ margin: "30px" }} className="title">
        Start your internship journey!
        </Typography>
      <EducationsItem />
      <SkillsItem />
      <ExperiencesItem />
      <PreferencesItem />
      <HobbiesItem />
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="primary" onClick={goToDashboard}>Submit</Button>
      </div>
    </div>
  )
}

