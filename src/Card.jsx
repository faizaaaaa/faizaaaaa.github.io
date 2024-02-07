import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

// Since only light theme is needed, we directly apply it
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Card() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container spacing={2}>
        {/* Create 3 Grid items, each with a Paper component (Item) of elevation 24 */}
        <Grid item xs={4} >
          <Item className="card-container" elevation={24} style={{fontWeight: 'bold', color: '#8e8e91'}}>Twilio</Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={24}>CGI</Item>
        </Grid>
        <Grid item xs={4}>
          <Item elevation={24}>RideFlag Technologies Ltd.</Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
