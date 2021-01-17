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
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const options = [
  { value: 'fulltime', label: 'Full-Time' },
  { value: 'parttime', label: 'Part-Time' },
  { value: 'selfemployed', label: 'Self-employed' },
  { value: 'freelance', label: 'Freelance' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
  { value: 'apprenticeship', label: 'Apprenticeship' },
];


export default function JobsItem(props) {
  const classes = useStyles();
  const defaultProps = {
    options: options,
    getOptionLabel: (option) => option.label,
  };

  const defaultWorkCheckedStatus = {
    'Remote': false,
    'In Office': false,
    'Hybrid': false,
  };

  const [jobInput, setJobInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [positionInput, setPositionInput] = useState("");
  const [workCheckedStatus, setWorkCheckedStatus] = useState(defaultWorkCheckedStatus);

  const changeJobInput = (event) => setJobInput(event.target.value);
  const changeDepartmentInput = (event) => setDepartmentInput(event.target.value);
  const changeDescriptionInput = (event) => setDescriptionInput(event.target.value);
  const changePositionInput = (event) => setPositionInput(event.target.value);

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
          <Typography variant="h3">4. JOB OPENINGS- What kind of interns are you looking for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <div>
              <form>
                <Typography>First Job Position</Typography>
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
                  onChange={changeDepartmentInput}
                  value={departmentInput}
                  placeholder="Department/Project (Optional)"
                  disableUnderline
                  fullWidth
                />

                <div style = {{margin: "10px", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                  <div style = {{width:"100%", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                    <Typography style={{marginRight: "10px"}}>From </Typography>
                    <input style={{width:"50%", fontSize: "1.0rem"}} type="date" />
                  </div>
                  <div style = {{width:"100%", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                    <Typography style={{marginRight: "10px"}}>To</Typography>
                    <input style={{width:"50%", fontSize: "1.0rem"}} type="date" />
                  </div>
                </div>

                <FilledInput
                  className={classes.inputDescription}
                  onChange={changeDescriptionInput}
                  value={descriptionInput}
                  placeholder="Job Description"
                  disableUnderline
                  fullWidth
                  multiline
                />

                <div>
                  <BlueAutoComplete
                      multiple
                      id="tags-standard"
                      options={requiredSkills}
                      getOptionLabel={(option) => option.title}
                      defaultValue={[requiredSkills[0]]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="REQUIRED Skills"
                          placeholder="Microsoft Office, Python, C Language, JavaScript, React, Communication..."
                        />
                      )}
                    />
                </div>

                <div>
                  <GreenAutoComplete
                      multiple
                      id="tags-standard"
                      options={preferredSkills}
                      getOptionLabel={(option) => option.title}
                      defaultValue={[preferredSkills[0]]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="PREFERRED Skills"
                          placeholder="Project Management, Photoshop..."
                        />
                      )}
                    />
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

                <div style = {{marginTop: "10px"}}>
                  <Typography variant= "body1" style = {{marginTop: "10px"}}>How many positions are available for this job?</Typography>
                  
                  <FilledInput
                    className={classes.input}
                    onChange={changePositionInput}
                    value={positionInput}
                    placeholder="Please input a whole number"
                    disableUnderline
                    fullWidth
                  />

                  
                
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
  checkbox: {
    '&.MuiIconButton-root': {
      padding: '4px',
    },
    '&.Mui-checked': {
      color: 'rgba(0, 0, 0, 0.54)',
    }
  }
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

const GreenAutoComplete = withStyles({
  tag: {
    fontWeight: "bold",
    fontSize: "1.0rem",
    backgroundColor: "#44BBA4",
    height: 24,
    position: "relative",
    zIndex: 0,
    
    "& .MuiChip-label": {
      color: "#fff"
    },
    "& .MuiChip-deleteIcon": {
      color: "#44BBA4"
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

const requiredSkills = [
  { title: 'Microsoft Office', type: 'requiredSkill' },
  { title: 'Python', type: 'requiredSkill' },
  { title: 'C Language', type: 'requiredSkill' },
  { title: 'JavaScript', type: 'requiredSkill' },
  { title: 'React', type: 'requiredSkill' },
  { title: 'Communication', type: 'requiredSkill' }
];

const preferredSkills = [
  { title: 'Project Managament', type: 'preferredSkill' },
  { title: 'Photoshop', type: 'preferredSkill' },
  { title: 'Premiere Pro', type: 'preferredSkill' },
  { title: 'Teamwork', type: 'preferredSkill' },
];