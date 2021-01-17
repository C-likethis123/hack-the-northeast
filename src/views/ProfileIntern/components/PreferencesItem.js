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

export default function PreferencesItem(props) {
  const classes = useStyles();
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

  const defaultWorkCheckedStatus = {
    'Remote': false,
    'In Office': false,
    'Hybrid': false,
  };

  const [companyCheckedStatus, setCompanyCheckedStatus] = useState(defaultCompanyCheckedStatus);
  const [workCheckedStatus, setWorkCheckedStatus] = useState(defaultWorkCheckedStatus);

  const handleChangeCompany = (event) => {
    const newStatus = {
      ...companyCheckedStatus,
      [event.target.name]: event.target.checked,
    }

    setCompanyCheckedStatus(newStatus);
  };

  const handleChangeWork = (event) => {
    const newStatus = {
      ...workCheckedStatus,
      [event.target.name]: event.target.checked,
    }

    setWorkCheckedStatus(newStatus);
  };
  
  return (
    <div className="orangeBox">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">4. PREFERENCES- What kind of jobs are you looking for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <div>
              <OrangeAutoComplete
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
                    placeholder="Information System, Finance, Environment..."
                  />
                )}
              />
            </div>

            <div style = {{marginTop: "10px"}}>
              <Typography variant= "body1" style = {{marginTop: "10px"}}>What kind of company do you prefer to work in?</Typography>

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

            <div style = {{marginTop: "10px"}}>
              <Typography variant= "body1" style = {{marginTop: "10px"}}>What kind of work arrangement is ideal?</Typography>

              <div style = {{marginLeft: "8px"}}>
                {Object.keys(defaultWorkCheckedStatus).map((value) => {
                  return <FormControlLabel
                  control={<Checkbox 
                    style = {{border: "20px"}}
                    className={classes.checkbox} 
                    checked={workCheckedStatus[value]} onChange={handleChangeWork} name={value} />}
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


const OrangeAutoComplete = withStyles({
  tag: {
    fontWeight: "bold",
    fontSize: "1.0rem",
    backgroundColor: "#ED8057",
    height: 24,
    position: "relative",
    zIndex: 0,
    
    "& .MuiChip-label": {
      color: "#fff"
    },
    "& .MuiChip-deleteIcon": {
      color: "#ED8057"
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
  { title: 'Product Design', type: 'technical' },
  { title: 'Front End Development', type: 'technical' },
  { title: 'Education', type: 'technical' },
  { title: 'UI/UX', type: 'technical' },
  { title: 'Game Development', type: 'technical' }
];

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

