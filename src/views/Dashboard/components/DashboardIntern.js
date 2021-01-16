import React from 'react'
import JobListItem from "./JobListItem";
import GoogleImage from "./images/google.svg";
import FacebookImage from "./images/facebook.svg";


export default function DashboardIntern() {
  var jobList = [
    {name:"Google", image:GoogleImage, skills:{ technicalSkills: ["React", "HTML", "Figma"], softSkills: ["Communication"] }},
    {name:"Facebook", image:FacebookImage, skills:{ technicalSkills: ["Marketing", "Finance"], softSkills: ["Organisation"] }}
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

