import React from 'react'
import SkillsItem from "./ToolsItem";
import ProfilesItem from "./ProfilesItem";
import ToolsItem from "./ToolsItem";
import CulturesItem from "./CulturesItem";
import { Typography } from "@material-ui/core";
import JobsItem from './JobsItem';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Header } from "../../../layouts";
export default function ProfileIntern() {
  const history = useHistory();
  const goToDashboard = () => {
    history.push("/dashboardCompany");
  }

  return (
    <div>
      <Header colour="default" />
      <Typography variant="h2" style={{ margin: "30px" }} className="title">Start looking for your perfect intern!</Typography>
      <div>
        <ProfilesItem />
        <ToolsItem />
        <CulturesItem />
        <JobsItem />
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={goToDashboard}>Submit</Button>
        </div>
      </div>
      <div style={{ height: "100px" }}>
      </div>
    </div>
  )
}

