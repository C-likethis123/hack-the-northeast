import React from 'react'
import SkillItem from './SkillItem'

export default function JobListItem(props) {

  return (
    <div>
        <div>
            {props.name}
        </div>
        <div>
            <img src = {props.image} width = "100px"></img>
        </div>
        <div>
            {props.skills.technicalSkills.map(
            (skill) => <SkillItem skill = {skill}/>)}

            {props.skills.softSkills.map(
            (skill) => <SkillItem skill = {skill}/>)}
        </div>
    </div>
  )
}

