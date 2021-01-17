import React, { useState } from 'react'
import SkillItem from './SkillItem'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { FilledInput } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


export default function SkillsItem(props) {
  const classes = useStyles();

  return (
    <div className="orangeBox">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">2. SKILLS- Show off your abilities to your employers!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <BlueAutoComplete
              multiple
              id="tags-standard"
              options={skills}
              getOptionLabel={(option) => option.title}
              defaultValue={[skills[0]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Skills"
                  placeholder="Python, Photoshop..."
                />
              )}
            />

          </div>
        </AccordionDetails>
      </Accordion>

    </div>
  )

}


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
    '& > :first-child': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  button: {
    padding: '0.53125rem 2.4375rem',
    borderRadius: '100px',
  },
  input: {
    width: '100%',
    border: '2px solid #E5E5E5',
    backgroundColor: 'unset',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.05)',
    marginBottom: '0.5625rem',
    '&:hover,.Mui-focused': {
      backgroundColor: 'unset',
    },
    '& .MuiFilledInput-input': {
      padding: '0.5rem 0.75rem',
    },
  },
  blueChipStyle: {
    color: theme.palette.blue,
    borderColor: theme.palette.blue,
    margin: 2
  },
  orangeChipStyle: {
    color: theme.palette.orange,
    borderColor: theme.palette.orange,
    margin: 2
  },
  greyChipStyle: {
    color: theme.palette.gray,
    borderColor: theme.palette.gray,
    margin: 2
  },
}));

const BlueAutoComplete = withStyles({
  tag: {
    fontWeight: "bold",
    fontSize: "1.0rem",
    backgroundColor: "#274690",
    height: 24,
    position: "relative",
    zIndex: 0,
    
    "& .MuiChip-label": {
      color: "#fff"
    },
    "& .MuiChip-deleteIcon": {
      color: "#274690"
    },
    "&:after": {
      content: '""',
      right: 10,
      top: 6,
      height: 12,
      width: 12,
      position: "absolute",
      backgroundColor: "white",
      zIndex: -1
    }
  }
})(Autocomplete);

const skills = [
  { title: 'Adobe Illustrator', type: 'technical' },
  { title: 'Adobe XD', type: 'technical' },
  { title: 'Microsoft Office', type: 'technical' },
  { title: 'Python', type: 'technical' },
  { title: 'Photoshop', type: 'technical' },
  { title: 'JavaScript', type: 'technical' },
  { title: 'React', type: 'technical' },
  { title: 'Premiere Pro', type: 'technical' },
  { title: 'Teamwork', type: 'soft' },
  { title: 'Project Manager', type: 'soft' },
  { title: 'Communication', type: 'soft' },
  { title: 'Organisation', type: 'soft' },
];