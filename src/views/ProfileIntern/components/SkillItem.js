import React from 'react'
import Chip from '@material-ui/core/Chip';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function SkillItem(props) {
  const handleClick = () => {
  };

  return (
    <Chip
        icon={props.icon}
        onClick={handleClick}
        className={props.style}
        variant="outlined"
        size="small"
        label={props.skill}
      />
  )
}



