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

const options = [
  { value: 'fulltime', label: 'Full-Time' },
  { value: 'parttime', label: 'Part-Time' },
  { value: 'selfemployed', label: 'Self-employed' },
  { value: 'freelance', label: 'Freelance' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
  { value: 'apprenticeship', label: 'Apprenticeship' },
];


export default function ExperiencesItem(props) {
  const classes = useStyles();
  const [companyInput, setCompanyInput] = useState("");
  const [jobInput, setJobInput] = useState("");
  const [employmentInput, setEmploymentInput] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const changeCompanyInput = (event) => setCompanyInput(event.target.value);
  const changeJobInput = (event) => setJobInput(event.target.value);
  const changeEmploymentInput = (event) => setEmploymentInput(event.target.value);

  const pickRange = React.createRef();

  const handleRangeChange = () => {console.log("hi")};
  const handleRangeDissmis = () => {console.log("hi2")};


  return (
    <div className="orangeBox">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>2. EXPERIENCES- What have you been doing before this?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <div>
              <form>
                <Typography>Current/Most recent employer</Typography>
                <FilledInput
                  className={classes.input}
                  onChange={changeCompanyInput}
                  value={companyInput}
                  placeholder="Company"
                  disableUnderline
                  fullWidth
                />
                <FilledInput
                  className={classes.input}
                  onChange={changeJobInput}
                  value={jobInput}
                  placeholder="Job Title"
                  disableUnderline
                  fullWidth
                />
                <FilledInput
                  className={classes.input}
                  onChange={changeEmploymentInput}
                  value={employmentInput}
                  placeholder="Employment Type"
                  disableUnderline
                  fullWidth
                />

                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
                <input type="date" />
                <input type="date" />


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

