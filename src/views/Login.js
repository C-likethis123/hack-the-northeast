import React, { useState } from 'react'
import { FormControlLabel, Radio, RadioGroup, FilledInput, Box, Button, Typography, makeStyles } from '@material-ui/core'; import { useHistory } from 'react-router-dom';
import { Header } from "../layouts";

export default function Login({ authenticate }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("company");
  const changeUsername = (event) => setUsername(event.target.value);
  const changePassword = (event) => setPassword(event.target.value);

  const history = useHistory();
  const handleChange = (event) => setUserType(event.target.value);
  const onLogin = () => {
    const isCredentialsCorrect = username === 'therealgoogle' && password === 'google123';
    if (isCredentialsCorrect) {
      authenticate();
      if (userType === 'company') {
        history.push("/profileCompany");
      } else {
        history.push("/profileIntern")
      }
    }
  };

  const goToSignUp = () => history.push("/signup");

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Header colour="white" />
        <Box className={classes.text}>
          <Typography style={{ marginBottom: "20px" }} variant="h1" color="primary">Welcome Back!</Typography>
          <form>
            <FilledInput
              className={classes.input}
              onChange={changeUsername}
              value={username}
              placeholder="Username"
              disableUnderline
              fullWidth
            />
            <FilledInput
              className={classes.input}
              onChange={changePassword}
              value={password}
              type="password"
              placeholder="Password"
              disableUnderline
              fullWidth
            />
            <RadioGroup row value={userType} onChange={handleChange}>
              <FormControlLabel color="primary" className={classes.radio} value="student" label="Student" control={<Radio color="primary" />} />
              <FormControlLabel color="primary" className={classes.radio} value="company" label="Company" control={<Radio color="primary" />} />
            </RadioGroup>
            <Button onClick={onLogin} className={classes.button} variant="contained" color="primary">Login</Button>
          </form>
        </Box>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.text}>
          <Typography style={{ marginBottom: "20px" }} variant="h1" color="secondary">Find your perfect internship</Typography>
          <Typography variant="body2" color="secondary">
            Skip the endless scrolling and easily get matched with the best internships for you!
            </Typography>

          <Typography variant="body2" color="secondary">
            Our algorithm connects you with employers based on your skills and preferences.
            </Typography>

          <Typography variant="body2" color="secondary">
            Employers can also invite interns they are interested in to apply, increasing the chances of a perfect match!
          </Typography>
          <Button className={classes.button} onClick={goToSignUp} variant="contained" color="secondary">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box >

  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    '& > :last-child': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  container: {
    width: '50%',
    height: '100%',
    padding: '0rem 3.25rem',
  },
  text: {
    padding: '9.6875rem 7rem',
  },
  button: {
    padding: '0.53125rem 2.4375rem',
    borderRadius: '100px',
    marginTop: 20,
  },
  input: {
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
