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

export default function CulturesItem(props) {
  const classes = useStyles();
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
          <Typography variant="h3">3. CULTURE- What are the values and attitude that govern your office? (Optional)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <div>
            <Typography variant= "body1">This will help us find suitable interns.</Typography>
              <PurpleAutoComplete
                multiple
                id="tags-standard"
                options={cultures}
                getOptionLabel={(option) => option.title}
                defaultValue={[cultures[0]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Cultures"
                    placeholder="Communication, Curiosity, Passion..."
                  />
                )}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

    </div>
  )

}


const PurpleAutoComplete = withStyles({
  tag: {
    fontWeight: "bold",
    fontSize: "1.0rem",
    backgroundColor: "#B944BB",
    height: 24,
    position: "relative",
    zIndex: 0,
    
    "& .MuiChip-label": {
      color: "#fff"
    },
    "& .MuiChip-deleteIcon": {
      color: "#B944BB"
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

const cultures = [
  { title: 'Judgement', type: 'culture' },
  { title: 'Innovation', type: 'culture' },
  { title: 'Impact', type: 'culture' },
  { title: 'Kind', type: 'culture' },
  { title: 'Courage', type: 'culture' },
  { title: 'Selfless', type: 'culture' },
  { title: 'Free-spirited', type: 'culture' },
  { title: 'Inclusion', type: 'culture' },
  { title: 'Integrity', type: 'culture' },
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
  greenChipStyle: {
    color: theme.palette.green,
    borderColor: theme.palette.green,
    margin: 2
  },
  greyChipStyle: {
    color: theme.palette.gray,
    borderColor: theme.palette.gray,
    margin: 2
  },
}));

