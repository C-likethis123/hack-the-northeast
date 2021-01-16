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
import AddIcon from '@material-ui/icons/Add';

export default function PreferencesItem(props) {
  const classes = useStyles();
  const skills = {recommendedSkills:["Product Design", "Front End Development", "Education", "UI/UX", "Game Developer"], selectedSkills: ["User Experience", "Robotics", "Children", "IT"]}
  const [preferenceInput, setpreferenceInput] = useState("");

  const changepreferenceInput = (event) => setpreferenceInput(event.target.value);

  return (
    <div className="orangeBox">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>3. PREFERENCES- What kind of jobs are you looking for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <div>
              <form>
                
                <FilledInput
                  className={classes.input}
                  onChange={changepreferenceInput}
                  value={preferenceInput}
                  placeholder="Information System, Finance, Environment..."
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

            <div>
              {skills.recommendedSkills.map(
              (skill) => <SkillItem style = {classes.greyChipStyle} icon = {<AddIcon/>} skill = {skill}/>)}
            </div>

            <Typography>We will try to match you with your ideal jobs!</Typography>
            <div>
              {skills.selectedSkills.map(
              (skill) => <SkillItem style = {classes.blueChipStyle} skill = {skill}/>)}
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

