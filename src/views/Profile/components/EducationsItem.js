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
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = [
  { value: 'Associate degree', label: 'Associate degree' },
  { value: "Bachelor's degree", label: "Bachelor's degree" },
  { value: "Master's degree", label: "Master's degree" },
  { value: 'Doctoral degree', label: 'Doctoral degree' },
];


export default function EducationsItem(props) {
  const classes = useStyles();
  const defaultProps = {
    options: options,
    getOptionLabel: (option) => option.label,
  };

  const [schoolInput, setSchoolInput] = useState("");
  const [degreeInput, setDegreeInput] = useState("");
  const [majorInput, setMajorInput] = useState("");

  const changeSchoolInput = (event) => setSchoolInput(event.target.value);
  const changeDegreeInput = (event) => setDegreeInput(event.target.value);
  const changeMajorInput = (event) => setMajorInput(event.target.value);

  return (
    <div className="orangeBox">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">1. EDUCATION- Which schools did you attend?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <div>
              <form>
                <Typography>Current/Most recent school</Typography>
                <FilledInput
                  className={classes.input}
                  onChange={changeSchoolInput}
                  value={schoolInput}
                  placeholder="School Name*"
                  disableUnderline
                  fullWidth
                />
                <Autocomplete
                  {...defaultProps}
                  id="employment"
                  autoComplete
                  includeInputInList
                  renderInput={(params) => <TextField {...params} label="Degree Level Attained/ Will Be Attending"/>}
                />

                
                <FilledInput
                  style = {{marginTop: "10px"}}
                  className={classes.input}
                  onChange={changeMajorInput}
                  value={majorInput}
                  placeholder="Major, Programme, Practice Area"
                  disableUnderline
                  fullWidth
                />


                <div style = {{margin: "10px", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                  <div style = {{width:"100%", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                    <Typography style={{marginRight: "10px"}}>From </Typography>
                    <input style={{width:"50%", fontSize: "0.6rem"}} type="date" />
                  </div>
                  <div style = {{width:"100%", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                    <Typography style={{marginRight: "10px"}}>To</Typography>
                    <input style={{width:"50%", fontSize: "0.6rem"}} type="date" />
                  </div>
                </div>

              </form>
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
  inputDescription: {
    width: '100%',
    border: '2px solid #E5E5E5',
    backgroundColor: 'unset',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.05)',
    marginBottom: '0.5625rem',
    '&:hover,.Mui-focused': {
      backgroundColor: 'unset',
    },
    '& .MuiFilledInput-input': {
      padding: '1.5rem 0rem',
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

