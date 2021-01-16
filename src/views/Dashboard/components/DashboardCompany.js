import React from 'react'
import InternListItem from "./InternListItem";
import CatImage from "./images/cat.svg";
import DogImage from "./images/dog.svg";


export default function DashboardIntern() {
  var internList = [
    {name:"Joe", image:CatImage, skills:"React, Vue"},
    {name:"Jane", image:DogImage, skills:"Marketing, Finance, Blockchain"}
  ]

  return (
    <div>
      Round 2
      <div>
          Your list of interns for round 2:
          {internList.map(
            (intern) => <InternListItem name={intern.name} image={intern.image} skills={intern.skills}/>)}
      </div>
    </div>
  )
}

