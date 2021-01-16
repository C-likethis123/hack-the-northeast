import React, { useState } from 'react'
import SkillItem from './SkillItem'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { FilledInput } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function SkillsItem(props) {
  const classes = useStyles();
  const skills = {technicalSkills: ["Marketing", "Finance"], softSkills: ["Organisation"]}
  const [skillInput, setSkillInput] = useState("");

  const changeSkillInput = (event) => setSkillInput(event.target.value);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1. SKILLS- Show off your abilities to your employers!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <div>
              <form>
                
                <FilledInput
                  className={classes.input}
                  onChange={changeSkillInput}
                  value={skillInput}
                  placeholder="Microsoft Office, Python, Teamwork..."
                  disableUnderline
                  fullWidth
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </form>
            </div>
            
            <Typography>Technical Skills</Typography>

            <div>
              {skills.technicalSkills.map(
              (skill) => <SkillItem skill = {skill}/>)}
            </div>

            <Typography>Soft Skills</Typography>
            <div>
              {skills.softSkills.map(
              (skill) => <SkillItem skill = {skill}/>)}
            </div>

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
}));

