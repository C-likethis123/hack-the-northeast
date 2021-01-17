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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const options = [
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Automotive', label: 'Automotive' },
  { value: 'Business Services', label: 'Business Services' },
  { value: 'Construction', label: 'Construction' },
  { value: 'Defense', label: 'Defense' },
  { value: 'Education', label: 'Education' },
  { value: 'Environment', label: 'Environment' },
];

export default function ProfilesItem(props) {
  const classes = useStyles();
  const defaultProps = {
    options: options,
    getOptionLabel: (option) => option.label,
  };
  const defaultCompanyCheckedStatus = {
    'Startup': false,
    'Small and Medium-Sized Enterprises (SMEs)': false,
    'Government Agencies': false,
    'Non-Profit': false,
    'Non-Governmental Organisations (NGOs)': false,
    'International Agencies': false,
    'Local Businesses': false,
    'Multinational Corporations (MNCs)': false,
  };

  const [companyInput, setCompanyInput] = useState("");
  const [companyCheckedStatus, setCompanyCheckedStatus] = useState(defaultCompanyCheckedStatus);

  const changeCompanyInput = (event) => setCompanyInput(event.target.value);
  const handleChangeCompany = (event) => {
    const newStatus = {
      ...companyCheckedStatus,
      [event.target.name]: event.target.checked,
    }

    setCompanyCheckedStatus(newStatus);
  };

  
  return (
    <div className="orangeBox">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">1. PROFILE- Some basic information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <FilledInput
              className={classes.input}
              onChange={changeCompanyInput}
              value={companyInput}
              placeholder="Company Name"
              disableUnderline
              fullWidth
            />

            <div>
              <div>
                <Autocomplete
                    {...defaultProps}
                    id="industry"
                    autoComplete
                    fullWidth
                    includeInputInList
                    renderInput={(params) => <TextField {...params} label="Industry"/>}
                  />
              </div>
            </div>

            <div style = {{marginTop: "10px"}}>
              <Typography variant= "body1" style = {{marginTop: "10px"}}>What type of company are you?</Typography>

              <div style = {{marginLeft: "8px"}}>
                {Object.keys(defaultCompanyCheckedStatus).map((value) => {
                  return <FormControlLabel
                  control={<Checkbox 
                    style = {{border: "20px"}}
                    className={classes.checkbox} 
                    checked={companyCheckedStatus[value]} onChange={handleChangeCompany} name={value} />}
                  label={<Typography variant= "body1">{value}</Typography>}
                />
              })}
              </div>
            
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
  checkbox: {
    '&.MuiIconButton-root': {
      padding: '4px',
    },
    '&.Mui-checked': {
      color: 'rgba(0, 0, 0, 0.54)',
    }
  }
}));

