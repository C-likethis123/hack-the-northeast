import React from 'react'

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
            {props.skills}
        </div>
    </div>
  )
}

