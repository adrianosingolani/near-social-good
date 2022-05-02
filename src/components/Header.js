import * as React from 'react';

import { login, logout } from "../utils/near";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button
} from '@mui/material/';

export default function ButtonAppBar() {
  const account = window.walletConnection.account();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NEAR Social Good
          </Typography>
          {account.accountId ? (
            <>
              <Typography variant="caption">{account.accountId}</Typography>
              <Button sx={{marginLeft: 2}} variant="outlined" color="inherit" onClick={() => logout()}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => login()}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}