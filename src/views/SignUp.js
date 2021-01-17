import React, { useState } from 'react'
import { Link, FilledInput, Box, Button, Typography, makeStyles } from '@material-ui/core';

export default function SignUp() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const changeUsername = (event) => setUsername(event.target.value);
  const changePassword = (event) => setPassword(event.target.value);
  const changeEmail = (event) => setEmail(event.target.value);

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.text}>
          <Typography variant="h1" color="secondary">Welcome Back!</Typography>
          <Typography variant="body2">Find the perfect internship for you! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec massa augue. Proin aliquam lorem nisi, vitae fermentum tortor posuere id. Mauris interdum ac est id ultrices. </Typography>
          <Button className={classes.button} href="/#/login" variant="contained" color="secondary">
            Sign In
          </Button>
        </Box>

      </Box>
      <Box className={classes.container}>
        <Box className={classes.text}>
          <Typography variant="h1" color="primary">Create Account</Typography>
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
            <FilledInput
              className={classes.input}
              onChange={changeEmail}
              value={email}
              placeholder="Email"
              disableUnderline
              fullWidth
            />
            <Button className={classes.button} variant="contained" color="primary">Sign Up</Button>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    '& > :first-child': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  container: {
    width: '50%',
    height: '100%',
    padding: '0rem 3.25rem',
  },
  text: {
    padding: '10rem 0rem',
  },
  button: {
    padding: '0.53125rem 2.4375rem',
    borderRadius: '100px',
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
