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

export default function HobbiesItem(props) {
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
          <Typography variant="h3">5. Personality- More about yourself! (Optional)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column", width: "100%"}}>
            <div>
            <Typography variant= "body1" style = {{marginTop: "10px"}}>What are your hobbies? How do you spend your free time?</Typography>
              <BlueAutoComplete
                multiple
                id="tags-standard"
                options={hobbies}
                getOptionLabel={(option) => option.title}
                defaultValue={[hobbies[0]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Hobbies"
                    placeholder="Hiking, Dog Petting, Inventing New Dishes..."
                  />
                )}
              />
            </div>

            <div>
            <Typography variant= "body1" style = {{marginTop: "20px"}}>How will your friends describe you?</Typography>
              <BlueAutoComplete
                multiple
                id="tags-standard"
                options={personalities}
                getOptionLabel={(option) => option.title}
                defaultValue={[personalities[0]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Personalities"
                    placeholder="Free-spirited, Meticulous, Vengeful..."
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


const BlueAutoComplete = withStyles({
  tag: {
    fontWeight: "bold",
    fontSize: "0.6rem",
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

const hobbies = [
  { title: 'Roller Blading', type: 'hobby' },
  { title: 'Ice Skating', type: 'hobby' },
  { title: 'Reading', type: 'hobby' },
  { title: 'Knitting', type: 'hobby' },
  { title: 'Cycling', type: 'hobby' },
  { title: 'Basketball', type: 'hobby' },
  { title: 'Volunteering', type: 'hobby' },
  { title: 'Drawing', type: 'hobby' }
];

const personalities = [
  { title: 'Hardworking', type: 'personality' },
  { title: 'Motivated', type: 'personality' },
  { title: 'Funny', type: 'personality' },
  { title: 'Kind', type: 'personality' },
  { title: 'Punctual', type: 'personality' },
  { title: 'Animal Lover', type: 'personality' },
  { title: 'Free-spirited', type: 'personality' },
  { title: 'Organised', type: 'personality' },
  { title: 'Friendly', type: 'personality' }
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

