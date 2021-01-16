import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Login({ authenticate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (event) => setUsername(event.target.value);
  const changePassword = (event) => setPassword(event.target.value);

  const history = useHistory();
  const onLogin = () => {
    const isCredentialsCorrect = username === 'test' && password === 'test';
    if (isCredentialsCorrect) {
      authenticate();
      history.push("/dashboard");
    }
  };

  return (
    <form>
      <input onChange={changeUsername} value={username} label="Username" />
      <input onChange={changePassword} value={password} type="password" />
      <Button onClick={onLogin}>Login</Button>
    </form>
  )
}
