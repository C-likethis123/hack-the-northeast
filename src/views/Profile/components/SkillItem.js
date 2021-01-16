import React from 'react'
import Chip from '@material-ui/core/Chip';

export default function SkillItem(props) {
  const handleClick = () => {
  };

  return (
    <Chip
      style = {{"margin": "2px"}}
      size="small"
      color="primary"
      label={props.skill}
      onClick={handleClick}
    />
  )
}

