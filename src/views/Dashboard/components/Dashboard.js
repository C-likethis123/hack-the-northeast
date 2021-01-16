import React from 'react'
import JobListItem from "./JobListItem";
import GoogleImage from "./images/google.svg";
import FacebookImage from "./images/facebook.svg";


export default function Dashboard() {
  var jobList = [
    {name:"Google", image:GoogleImage, skills:"React, Figma, Vue"},
    {name:"Facebook", image:FacebookImage, skills:"Marketing, Finance"}
  ]

  return (
    <div>
      Round 2
      <div>
          Your list of jobs for round 2:
          {jobList.map(
            (job) => <JobListItem name={job.name} image={job.image} skills={job.skills}/>)}
      </div>
    </div>
  )
}

